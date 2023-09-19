CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"content" TEXT NOT NULL,
	"createAt" DATE NOT NULL
)