import swaggerJSDoc from "swagger-jsdoc"

const options = {
    swaggerDefinition: {
        info: {
            title: "UMC Study API",
            version: "1.0.0",
            description: "UMC Study API with express, API 설명",
        },
        host: "localhost:3000",
        basepath: "../",
    },
    apis: ["src/route/*.js", "swagger/*.yaml"],
}

export const specs = swaggerJSDoc(options)
