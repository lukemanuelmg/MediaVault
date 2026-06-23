using DotNetEnv;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables from .env
Env.Load("../.env");

var connectionString = Environment.GetEnvironmentVariable("MSSQL_CONNECTION_STRING") 
    ?? throw new InvalidOperationException(
        "No Database connection found in MSSQL_CONNECTION_STRING environment variable.");

builder.Services.AddDbContext<AppDbContext>(options => 
    options.UseSqlServer(connectionString)
);


var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
    builder =>
    {
        builder.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("_myAllowSpecificOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
