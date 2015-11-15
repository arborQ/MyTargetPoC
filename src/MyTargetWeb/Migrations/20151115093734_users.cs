using System.Collections.Generic;
using Microsoft.Data.Entity.Relational.Migrations;
using Microsoft.Data.Entity.Relational.Migrations.Builders;
using Microsoft.Data.Entity.Relational.Migrations.Operations;

namespace MyTargetWeb.Migrations
{
    public partial class users : Migration
    {
        public override void Up(MigrationBuilder migration)
        {
            migration.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column(type: "bigint", nullable: false)
                        .Annotation("SqlServer:ValueGeneration", "Identity"),
                    Created = table.Column(type: "datetime2", nullable: false),
                    IsActive = table.Column(type: "bit", nullable: false, defaultValue: false),
                    Login = table.Column(type: "nvarchar(max)", nullable: false),
                    Timestamp = table.Column(type: "rowversion", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });
        }
        
        public override void Down(MigrationBuilder migration)
        {
            migration.DropTable("User");
        }
    }
}
