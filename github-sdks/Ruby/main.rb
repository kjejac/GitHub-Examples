require 'octokit'

# Authenticate with your GitHub token
client = Octokit::Client.new(:access_token => ENV['GH_TOKEN'])

# Define the repository and branch details
repo = 'kjejac-alt/GitHub-Examples'
new_branch = 'rb-sdk'
base_branch = 'main' # or any other branch you want to base the new branch on

# Get the SHA of the base branch
base_branch_ref = client.ref(repo, "heads/#{base_branch}")
sha = base_branch_ref.object.sha

# Create the new branch
client.create_ref(repo, "heads/#{new_branch}", sha)
