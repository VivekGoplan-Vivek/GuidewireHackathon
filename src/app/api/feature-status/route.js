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
    const mockResponse1 = {
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

    const mockResponse = {
        "name": "User Identity Management Revamp",
        "url": "https://guidewire.aha.io/epics/DIS-E-75",
        "program_description": "- The epic has been moved to in progress due to the progress of its child stories.- CDP-54160 is currently in progress, focusing on the technical design and implementation for invoking connectors for the new CDA tiers.- CDP-51710 has been closed, indicating completion of development for supporting Extra Large pipelines for CDA self-service via Guidewire Home for PPP customers.- Several discussions and updates have been made regarding acceptance criteria and technical design scope.",
        "status": "Red",
        "timeline": "2025-08-15",
        "risks": `- **Scope Limitations**: The project does not include enabling enhanced CDA tiers for customer users or non-PPP tenants.
- **Documentation Needs**: There is a need for updated documentation to reflect the new CDA tiers and their provisioning processes, particularly for SRE users.
- **User Verification**: A use case for verifying the provisioned CDA tier size on the UI needs to be added.
- **Internal Communication**: Continuous alignment and confirmation are required among team members to ensure all requirements and user journeys are clearly understood and documented.`,
        "progress": "1 out of 2 features are completed. One is blocked.",
        "features": [
          {
            "name": "SSO Login Integration",
            "url": "https://guidewire.aha.io/features/DIS-234",
            "status": "Green",
            "timeline": "2025-07-28",
            "risks": "No current blockers.",
            "progress": "Jira Epic is In Progress with 4 out of 6 tasks completed."
          },
          {
            "name": "User Privacy Consent Flow",
            "url": "https://guidewire.aha.io/features/DIS-235",
            "status": "Red",
            "timeline": "2025-07-25",
            "risks": "Blocked on legal team approval.",
            "progress": "Jira Epic not yet started."
          }
        ]
      }
    



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