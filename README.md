# greenfinops

## Getting started  
1. `git clone git@github.com:AdilMektoub/greenfinops.git`

2. `cd greenfinops`

3. npm install`

4. For development: 
`npm dev`
5. For production:
`npm start`

6. If you want use docker-compose:
`docker-compose up`

7. Deploy in digital ocean:
Build the Docker image
`docker build -t greenfinops .`

#### Run the container locally to test
`docker run -p 3000:3000 greenfinops`

#### For deployment to a platform like DigitalOcean or Railway, you can push to their container registry
#### Example for DigitalOcean (after installing doctl and authenticating):
`doctl registry login`
`docker tag greenfinops registry.digitalocean.com/your-registry/greenfinops`
`docker push registry.digitalocean.com/your-registry/greenfinops`
