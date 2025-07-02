// Cliente GraphQL para WordPress
const WORDPRESS_GRAPHQL_URL = import.meta.env.PUBLIC_WP_GRAPHQL_URL || 'https://cms.blixel.es/graphql';

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{
    message: string;
    extensions?: any;
  }>;
}

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  try {
    const response = await fetch(WORDPRESS_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: GraphQLResponse<T> = await response.json();

    if (json.errors) {
      console.error('GraphQL errors:', json.errors);
      throw new Error('GraphQL errors occurred');
    }

    if (!json.data) {
      throw new Error('No data returned from GraphQL');
    }

    return json.data;
  } catch (error) {
    console.error('Error fetching GraphQL:', error);
    throw error;
  }
}

// Queries para WordPress
export const QUERIES = {
  // Obtener todas las páginas
  GET_ALL_PAGES: `
    query GetAllPages {
      pages(first: 100) {
        nodes {
          id
          slug
          title
          date
          modified
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `,

  // Obtener una página por slug
  GET_PAGE_BY_SLUG: `
    query GetPageBySlug($slug: String!) {
      pageBy(slug: $slug) {
        id
        slug
        title
        date
        modified
        content
        seo {
          title
          metaDesc
          canonical
          opengraphTitle
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `,

  // Obtener slugs de páginas para generar rutas
  GET_PAGE_SLUGS: `
    query GetPageSlugs {
      pages(first: 100) {
        nodes {
          slug
        }
      }
    }
  `,
};

// Funciones de utilidad
export async function getAllPages() {
  const data = await fetchGraphQL(QUERIES.GET_ALL_PAGES);
  return data.pages.nodes;
}

export async function getPageBySlug(slug: string) {
  const data = await fetchGraphQL(QUERIES.GET_PAGE_BY_SLUG, { slug });
  return data.pageBy;
}

export async function getPageSlugs() {
  const data = await fetchGraphQL(QUERIES.GET_PAGE_SLUGS);
  return data.pages.nodes.map((page: any) => page.slug);
}
