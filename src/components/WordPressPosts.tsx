// src/components/WordPressPosts.tsx
import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
// Asegúrate que la importación del cliente sea consistente con el export de client.ts
import { graphQLClient as WordPressGraphQLClient, gql } from '../graphql/client';

// Define tus interfaces aquí o impórtalas si están en otro archivo
interface WordPressPost {
  id: string;
  title: string;
  excerpt: string; // Asume que el excerpt puede contener HTML
  date: string;
}

// Interfaz para las props del componente
interface WordPressPostsProps {
  className?: string; // className es opcional
}

// Interfaz para la estructura esperada de la respuesta de Apollo Client para la query de posts
interface GraphQLPostsResponse {
  posts: {
    nodes: WordPressPost[];
  };
}

export default function WordPressPosts({ className }: WordPressPostsProps): ReactElement {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado para manejar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Verifica si gql se importó correctamente como una función
    console.log("gql function in WordPressPosts.tsx:", typeof gql);

    // Solo procede si gql es una función
    if (typeof gql !== 'function') {
      console.error("gql no es una función. Verifica la importación de @apollo/client.");
      setError("Error de configuración al cargar posts.");
      setLoading(false);
      return;
    }

    const queryDocument = gql`
      query GetPosts {
        posts(first: 5) {
          nodes {
            id
            title
            excerpt
            date
          }
        }
      }
    `;
    // Muestra el documento parseado en la consola (del navegador)
    console.log("queryDocument para posts (WordPressPosts.tsx):", queryDocument);

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Usa el tipo GraphQLPostsResponse para la respuesta esperada
        const response = await WordPressGraphQLClient.query<GraphQLPostsResponse>({
          query: queryDocument,
        });

        if (response.data && response.data.posts && response.data.posts.nodes) {
          setPosts(response.data.posts.nodes);
        } else {
          console.error('Estructura de respuesta inesperada para posts:', response);
          setError('No se pudieron cargar los posts debido a una respuesta inesperada.');
          setPosts([]);
        }
      } catch (fetchError) {
        console.error('Error fetching WordPress posts:', fetchError);
        setError('Error al contactar el servidor para cargar los posts.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // El array de dependencias vacío asegura que esto se ejecute solo una vez al montar

  if (loading) {
    return <p className={className || undefined}>Cargando posts...</p>;
  }

  if (error) {
    return <p className={className || undefined}>Error: {error}</p>;
  }

  return (
    <div className={className}>
      <h2>Latest Posts</h2>
      {posts.length === 0 ? (
        <p>No se encontraron posts.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              {/* Si el excerpt es HTML, usa dangerouslySetInnerHTML. Asegúrate de que confías en la fuente. */}
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              {/* Si es texto plano: <p>{post.excerpt}</p> */}
              <small>
                Publicado: {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}