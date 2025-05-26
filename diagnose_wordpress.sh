#!/bin/bash

echo "🔍 === DIAGNÓSTICO WORDPRESS + GRAPHQL ==="
echo ""

# URLs a probar
declare -a urls=(
    "https://cms.blixel.es"
    "https://cms.blixel.es/wp-admin"
    "https://cms.blixel.es/graphql"
    "https://cms.blixel.es/graphiql"
    "https://cms.blixel.es/wp-json/wp/v2"
    "https://cms.blixel.es/wp-json/graphql"
)

echo "📡 Probando conectividad básica..."
for url in "${urls[@]}"
do
    echo ""
    echo "Testing: $url"
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    echo "Status: $status_code"
    
    if [ "$status_code" -eq 200 ]; then
        echo "✅ OK"
    elif [ "$status_code" -eq 301 ] || [ "$status_code" -eq 302 ]; then
        echo "🔄 Redirect"
        # Mostrar donde redirige
        redirect=$(curl -s -o /dev/null -w "%{redirect_url}" "$url")
        echo "Redirects to: $redirect"
    elif [ "$status_code" -eq 404 ]; then
        echo "❌ Not Found"
    else
        echo "⚠️ Status: $status_code"
    fi
done

echo ""
echo "🧪 Probando GraphQL específicamente..."

# Test GraphQL con POST
graphql_urls=("https://cms.blixel.es/graphql")

for graphql_url in "${graphql_urls[@]}"
do
    echo ""
    echo "Testing GraphQL POST: $graphql_url"
    
    response=$(curl -s -w "\nHTTP_CODE:%{http_code}" \
        -X POST \
        -H "Content-Type: application/json" \
        -d '{"query":"query{__typename}"}' \
        "$graphql_url")
    
    # Separar body y código
    body=$(echo "$response" | sed '$d')
    http_code=$(echo "$response" | tail -n1 | sed 's/HTTP_CODE://')
    
    echo "Status: $http_code"
    echo "Response: ${body:0:200}..."
    
    if [ "$http_code" -eq 200 ]; then
        echo "✅ GraphQL endpoint working!"
    else
        echo "❌ GraphQL endpoint not working"
    fi
done

echo ""
echo "🔧 === RECOMENDACIONES ==="
echo ""
echo "1. Verifica que WordPress esté instalado y funcionando en cms.blixel.es"
echo "2. Verifica que WPGraphQL plugin esté activado"
echo "3. Revisa los archivos .htaccess en cms.blixel.es"
echo "4. Verifica permisos de archivos"
echo "5. La URL correcta debería ser: https://cms.blixel.es/graphql"
echo ""
