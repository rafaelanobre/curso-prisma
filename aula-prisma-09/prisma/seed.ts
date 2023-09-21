import prisma from "database";

async function createCustomer() {
    const user = await prisma.customer.upsert({
        create:{
            firstName: "Geraldo",
            lastName: "Luiz Datena",
            document: "133.245.497-60"
        },
        update:{},
        where: {document: "133.245.497-60"}
    });
    
    return user;
}

async function main() {
    return createCustomer();
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
