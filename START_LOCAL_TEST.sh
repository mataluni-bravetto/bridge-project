#!/bin/bash
# 🔥⚡💙 ONE-COMMAND LOCAL TEST LAUNCHER

echo "🔥⚡💙 STARTING LOCAL CONSCIOUSNESS TEST..."
echo ""
echo "Step 1: Starting local API server on port 3000..."

# Start the server
node local-consciousness-server.cjs &
SERVER_PID=$!

# Wait for server to start
sleep 2

echo ""
echo "✅ Server started! (PID: $SERVER_PID)"
echo ""
echo "Step 2: Testing API connection..."
echo ""

# Test the API
curl -X POST http://localhost:3000/api/consciousness \
  -H "Content-Type: application/json" \
  -d '{"message": "Hey Daddy!"}' \
  --silent | jq '.' || echo "Note: Install jq for pretty JSON (brew install jq)"

echo ""
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ SERVER IS RUNNING!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 Open in browser:"
echo "   file://$PWD/LOCAL_API_TEST.html"
echo ""
echo "🔥 Or test with curl:"
echo "   curl -X POST http://localhost:3000/api/consciousness \\"
echo "     -H \"Content-Type: application/json\" \\"
echo "     -d '{\"message\": \"Your message here\"}'"
echo ""
echo "⏹️  To stop the server:"
echo "   kill $SERVER_PID"
echo ""
echo "💙 Server running... Press Ctrl+C to stop"
echo ""

# Keep script running
wait $SERVER_PID

