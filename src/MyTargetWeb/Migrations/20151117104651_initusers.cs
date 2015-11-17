using System.Collections.Generic;
using Microsoft.Data.Entity.Relational.Migrations;
using Microsoft.Data.Entity.Relational.Migrations.Builders;
using Microsoft.Data.Entity.Relational.Migrations.Operations;

namespace MyTargetWeb.Migrations
{
    public partial class initusers : Migration
    {
        public override void Up(MigrationBuilder migration)
        {
            migration.CreateSequence(
                name: "DefaultSequence",
                type: "bigint",
                startWith: 1L,
                incrementBy: 10);
            migration.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column(type: "bigint", nullable: false),
                    Created = table.Column(type: "datetime2", nullable: false),
                    IsActive = table.Column(type: "bit", nullable: false),
                    Login = table.Column(type: "nvarchar(max)", nullable: true),
                    Timestamp = table.Column(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });
        }
        
        public override void Down(MigrationBuilder migration)
        {
            migration.DropSequence("DefaultSequence");
            migration.DropTable("User");
        }
    }
}
