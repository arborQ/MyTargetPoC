using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace MyTargetWebUpdate.Migrations
{
    public partial class remove_product_timestamp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "RowVersion", table: "Product");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                table: "Product",
                nullable: true);
        }
    }
}
