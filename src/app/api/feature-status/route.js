export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const featureId = searchParams.get('featureId');

    if (!featureId) {
      return Response.json(
        { error: 'Feature ID is required' },
        { status: 400 }
      );
    }

    // TODO: Replace this with your actual API call to your backend service
    // This is a mock response for demonstration purposes
    const mockResponse = {
      featureId: featureId,
      status: "In Progress",
      priority: "High",
      assignee: "John Doe",
      description: "AI-powered search functionality implementation",
      progress: 75,
      lastUpdated: new Date().toISOString(),
      estimatedCompletion: "2024-02-15",
      risk: "Medium",
      timeline: "Q1 2024 - Q2 2024",
      dependencies: ["DIS-230", "DIS-232"],
      comments: [
        {
          author: "Jane Smith",
          message: "Core functionality completed, working on edge cases",
          timestamp: new Date(Date.now() - 86400000).toISOString()
        },
        {
          author: "John Doe",
          message: "Integration tests passing, ready for review",
          timestamp: new Date(Date.now() - 172800000).toISOString()
        }
      ]
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return Response.json(mockResponse);
  } catch (error) {
    console.error('Error fetching feature status:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 