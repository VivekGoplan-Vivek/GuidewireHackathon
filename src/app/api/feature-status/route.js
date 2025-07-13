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
      description: "User Identity Management Revamp",
      progress: 75,
      lastUpdated: new Date().toISOString(),
      estimatedCompletion: "2024-02-15",
      risk: "Backend integration is delayed. OAuth2 provider is not production ready.",
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
      ],
      subfeatures: [
        {
          featureId: "DIS-230",
          status: "Completed",
          priority: "Medium",
          assignee: "Jane Smith",
          description: "User login revamp",
          progress: 100,
          lastUpdated: new Date(Date.now() - 172800000).toISOString(),
          estimatedCompletion: "2024-01-10",
          risk: "Backend integration is delayed. OAuth2 provider is not production ready.",
          timeline: "Q4 2023 - Q1 2024",
          dependencies: [],
          comments: [
            {
              author: "Jane Smith",
              message: "Login feature released.",
              timestamp: new Date(Date.now() - 172800000).toISOString()
            }
          ]
        },
        {
          featureId: "DIS-232",
          status: "Blocked",
          priority: "High",
          assignee: "John Doe",
          description: "Multi-factor authentication integration",
          progress: 50,
          lastUpdated: new Date(Date.now() - 86400000).toISOString(),
          estimatedCompletion: "2024-03-01",
          risk: "High",
          timeline: "Q1 2024",
          dependencies: ["DIS-230"],
          comments: [
            {
              author: "John Doe",
              message: "Waiting for external vendor integration.",
              timestamp: new Date(Date.now() - 86400000).toISOString()
            }
          ]
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