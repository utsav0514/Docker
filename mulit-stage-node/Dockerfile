# 1st stage 

FROM node:slim AS builder 

WORKDIR /app

COPY package.json /app/

COPY package-lock.json /app/

RUN npm install

COPY . .

RUN npm run build 
#2nd stage 

FROM node:slim

WORKDIR /app

COPY --from=builder /app/dist ./dist 
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./ 

RUN npm install 

CMD ["node", "dist/index.js"]



