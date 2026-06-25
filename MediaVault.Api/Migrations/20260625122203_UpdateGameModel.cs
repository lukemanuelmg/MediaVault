using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MediaVault.Api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateGameModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Publisher",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "ReleaseDate",
                table: "Games");

            migrationBuilder.AddColumn<string>(
                name: "CoverArtUrl",
                table: "Games",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GameBrainId",
                table: "Games",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ReleaseYear",
                table: "Games",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverArtUrl",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "GameBrainId",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "ReleaseYear",
                table: "Games");

            migrationBuilder.AddColumn<string>(
                name: "Publisher",
                table: "Games",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<DateOnly>(
                name: "ReleaseDate",
                table: "Games",
                type: "date",
                nullable: true);
        }
    }
}
