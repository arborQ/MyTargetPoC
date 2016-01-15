using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace MyTargetWebUpdate.Migrations
{
    public partial class product_location : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Product",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Location", table: "Product");
        }
    }
}
