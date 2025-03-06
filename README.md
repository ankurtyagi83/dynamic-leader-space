
# Ankur Tyagi - Project Manager & Scrum Master Portfolio

Personal portfolio website showcasing Ankur Tyagi's experience, skills, and achievements as a Project Manager and Scrum Master.

## Project info

**URL**: https://lovable.dev/projects/45a56f07-9e37-4943-b3c2-b2f40a07248b
**Custom Domain**: https://ankurtyagi.in

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/45a56f07-9e37-4943-b3c2-b2f40a07248b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to deploy this to ankurtyagi.in

To deploy to your custom domain ankurtyagi.in, follow these steps:

### Option 1: Using Netlify (Recommended)

1. Export your project to GitHub using the "Export to GitHub" option in Lovable.
2. Create a Netlify account and connect it to your GitHub repository.
3. Configure your build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add your custom domain in Netlify's domain settings:
   - Go to Site settings > Domain management
   - Add custom domain: `ankurtyagi.in`
   - Follow Netlify's instructions to update your DNS settings with your domain registrar

### Option 2: Manual Deployment

1. Build your project locally:
   ```sh
   npm run build
   ```
2. The built files will be in the `dist` folder
3. Upload these files to your web hosting provider that hosts ankurtyagi.in
4. Configure your web server to serve the index.html file for all routes

## Want more information?

For more details about using custom domains with Lovable projects, visit our docs: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
