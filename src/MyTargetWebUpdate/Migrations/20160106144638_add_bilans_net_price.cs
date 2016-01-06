using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace MyTargetWebUpdate.Migrations
{
    public partial class add_bilans_net_price : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "NetPrice",
                table: "StockChange",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "NetPrice", table: "StockChange");
        }
    }
}
