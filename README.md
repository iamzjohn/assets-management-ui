# AssetManagementUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
## Cloning the Project

To get started, you'll need to clone the Angular app project from the repository. Make sure you have Git installed on your system. Open a terminal and execute the following command:

## Running the Dockerized Angular App

Before you proceed, ensure you have Docker installed on your machine. You can download Docker for your specific operating system from the official Docker website.

Once you have Docker set up, follow these steps to run the Angular app as a Docker container:

### Step 1: Build the Docker Image

Navigate to the root directory of the cloned project in your terminal and run the following command to build the Docker image: `npm run build && docker build -t assets-ui .`


This will create a Docker image named `assets-ui` based on the configuration defined in the `Dockerfile` within the project.

### Step 2: Run the Docker Container

After successfully building the Docker image, you can run the Angular app as a Docker container using the following command: `docker run -d -p 80:80 assets-ui`


This command runs the Docker container in detached mode (`-d`) and maps port 4200 of your host system to port 80 of the container. The Angular app typically runs on port 4200 inside the container.

### Step 3: Access the Angular App

Once the Docker container is running, open your web browser and visit the following URL: `http://localhost:80` or `http://<your-host-ip>:80` 

You should see the Angular app running and be able to interact with it.

## Project Structure

The project follows a typical Angular application structure:

Here's a brief explanation of the main directories:

- `src`: The main source code of the Angular app.
  - `app`: Contains the components, services, and modules of the app.
    - `shared`: Contains shared component within the module like navbar and inputs.
    - `services`: Contains services used for data and logic handling.
    - `assets`: Contains page logic to list assets Page.
    - `assets-creation`: Contains page logic to create one asset Page.
    - `assets-creation`: Contains page logic to see each asset details Page.
    - `dashboard`: Contains page logic to see the Dashboard Page.
    - `login`: Contains page logic for the login Page.
    - `maintenance`: Contains page logic for the Maintenance Page.
    - `technicians`: Contains page logic for the Technicians List Page.
    - `workshop`: Contains page logic for the Workshops List Page.
  - `assets`: Contains static assets like images, fonts, etc.
- `.docker`: Specifies the configurations to build the Docker image.
- `Dockerfile`: Specifies the instructions to build the Docker image.

## Requirements

To run the Angular app in a Docker container, you need the following requirements:

1. **NodeJS v>=16**: Make sure you have NodeJS installed on your machine at least version 16.
2. **Docker**: Make sure you have Docker installed on your machine.
3. **Git**: You need Git to clone the Angular app repository.
4. **Web Browser**: Any modern web browser to access the app.

That's it! You now have the necessary information to clone, run, and Dockerize the Angular app successfully.

Happy coding!
