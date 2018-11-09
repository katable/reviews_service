# #The dockerfile is a list of instructions.
# #at what existing sandwich do i make the new layer on. alpine is the os. bc im running my server in js, i want to first start with node. and this node is built on a linux distribution called alpine.
# FROM node:8.12.0-alpine

# #make a folder in your image where things can live. on this new computer we just made using this image, we're gonna go in there and make a directory. 
# RUN mkdir -p /src/app

# #asign it as your working directory. this is your default directory.
# WORKDIR /src/app

# #copy. '.' means everything. copy this folder to /src/app. this folder is where the dockerfile resides in and we want to copy it to working directory. 
# COPY ./src/app

# #we dont wanna copy our node modules over bc its large and alpine env is different than our own and its best to let npm handle its installation so we get the right dependencies. note dont put react react-dom not in dependencies bc we dont want it installed on image. image should just be server and react is not needed for that. however you may want to have it if you want to serve up your index file since in index file you have ReactDOM so its a matter of choice. By moving everything you dont need from depencies to devDependencies, it reduces. The --production only installs the  dependencies. keep it small and youll have less problems.
# RUN npm install --production

# # check the next two following lines. you can seed it in your own separate container with the purpose of only seeding. in this file you could do like RUN mysql < schema.sql
# RUN mysql < schema.sql
# RUN npm run seed

# #port number
# EXPOSE 8080

# #CMD is command. CMD vs. run. run is just running commands in terminal. youre only allowed one CMD in each docker file and it is used to run app. it is run every time you create a container from image. Everything before this is how to create image. now, the cmd is to do something with that container. 
# CMD ["npm", "start"]