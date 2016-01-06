using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace MyTargetWebUpdate.Migrations
{
    public partial class add_product_supplier : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Supplier",
                table: "Product",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Supplier", table: "Product");
        }
    }
}
