using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace MyTargetWebUpdate.Migrations
{
    public partial class rename_store_value : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "Value", table: "StockChange", newName: "StoredQuantity");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(name: "StoredQuantity", table: "StockChange", newName: "Value");
        }
    }
}
