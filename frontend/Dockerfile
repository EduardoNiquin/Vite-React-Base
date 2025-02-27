FROM node:18-bullseye-slim AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=optional
COPY . .
RUN npm run build

FROM node:18-bullseye-slim

WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json /app/
RUN npm install --omit=optional --production

EXPOSE 5173
CMD ["npm", "run", "dev"]
