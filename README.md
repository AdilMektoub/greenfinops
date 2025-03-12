# GreenFinOps

<p align="center">
  <img src="public/favicon-32x32.png" alt="GreenFinOps Logo" width="80" height="80">
</p>

<p align="center">
  A professional website for a DevOps/SRE engineer specializing in Open e-Mobility deployments.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#docker">Docker</a>
</p>

## Features

- 🌱 Modern, eco-friendly design with renewable energy color scheme
- 💻 Built with Next.js and TypeScript for type safety and performance
- 📱 Fully responsive design for all device sizes
- 🚀 Optimized for performance and SEO
- 🐳 Docker support for easy deployment

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone git@github.com:AdilMektoub/greenfinops.git
   ```

2. Navigate to the project directory
   ```bash
   cd greenfinops
   ```

3. Install dependencies
   ```bash
   npm install
   ``` 
4. Run the development server
   ```bash
   npm run dev
   ```
5. Open [localhost:3000](localhost:3000](localhost:3000) with your browser to see the result.

6. For production:
   ```bash
    npm start
   ```

7. If you want use docker-compose:
   ```bash
    docker-compose up
   ```

8. Deploy in digital ocean:
    ```bash
     docker build -t greenfinops .
    ```

#### Run the container locally to test
   ```bash
    docker run -p 3000:3000 greenfinops
   ```

#### For deployment to a platform like DigitalOcean or Railway, you can push to their container registry
#### Example for DigitalOcean (after installing doctl and authenticating):
   ```bash
    doctl registry login
   ```
   ```bash
    docker tag greenfinops registry.digitalocean.com/your-registry/greenfinops
   ```
   ```bash
    docker push registry.digitalocean.com/your-registry/greenfinops
   ```

## License
MIT

Made with ❤️ and ☕ by Adil Mektoub