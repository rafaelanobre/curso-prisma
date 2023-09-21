import prisma from "./database";

(async () => {
  const studentsByClass = await prisma.student.groupBy({
    by:['class'],
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } }
  })
  console.log(studentsByClass);
});

(async () => {
  const studentsEmployed = await prisma.student.groupBy({
    by:['class'],
    where:{ jobId: { equals: null } },
    _count: { id: true },
    orderBy: { _count: { id: "desc" } }
  });
  console.log(studentsEmployed);
});