const strapi = require("strapi");

async function migrateEnumToText() {
  // Initialize Strapi
  await strapi().load();

  // Fetch all brand records from the database
  const brands = await strapi.query("brand").find();

  // Loop through each brand record
  for (const brand of brands) {
    // Update each record with the same value for the 'brand' field
    await strapi
      .query("brand")
      .update({ id: brand.id }, { brand: brand.brand });
  }

  console.log("Migration complete");
}

// Execute the migration function and handle any errors
migrateEnumToText().catch((err) => {
  console.error("Migration failed", err);
});
