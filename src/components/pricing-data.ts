export const pricingPlans = [
  {
    name: "Starter",
    tagline: "Free Trial · Watermarked",
    price: "$0 / Image",
    products: "Maximum 1-2 Images",
    purpose: "Trial / simple listing",
    images: "ecommerce product images",
    imageTypes:
      "Hero, angle, detail, lifestyle, feature/benefit, or dimensions — selected according to the product.",
    accuracy:
      "Reference-based production with product consistency checks.",
    watermark: "Imagenmerce watermark on all delivered trial images.",
    revisions: "Confirmed in quote",
    delivery: "Ecommerce-ready JPG / PNG / WebP, as agreed",
    turnaround: "Confirmed in quote",
  },
  {
    name: "Standard",
    tagline: "6 Images · Full Ecommerce Set",
    price: "$20 / SKU",
    products: "Minimum 5 SKUs",
    purpose: "Complete Amazon / Shopify / Ecommerce listing",
    images: "6 tailored images per product — pay for just 5!",
    imageTypes:
      "Hero, angle, detail, lifestyle, feature/benefit, and dimensions — selected according to the product.",
    accuracy:
      "Reference-based production with detailed product consistency and visual accuracy checks.",
    watermark: "No watermark",
    revisions: "Product images will be revised until they match the approved reference image.",
    delivery: "Ecommerce-ready JPG / PNG / WebP, as agreed",
    turnaround: "Confirmed in quote",
  },
  {
    name: "Custom",
    tagline: "Flexible Ecommerce Imaging at Scale",
    price: "$4 / image",
    products: "Custom Images / SKU volume",
    purpose:
      "For large catalogs, bulk image production, and ongoing ecommerce content needs",
    images: "As required — pay per image",
    imageTypes:
      "Hero, angle, detail, lifestyle, feature/benefit, dimensions, or other product-focused visuals as required.",
    accuracy:
      "Reference-based production with enhanced product accuracy, visual consistency, and final QA checks.",
    watermark: "No watermark",
    revisions: "Product images will be revised until they match the approved reference image.",
    delivery: "Ecommerce-ready JPG / PNG / WebP, as agreed",
    discounts: "1,000+ images: 2% off🔸",
    turnaround: "Confirmed in quote",
  },
  {
    name: "Fashion & Beauty",
    tagline: "AI models, & AI UGC lifestyle images🔹",
    price: "$6 / Image",
    products: "Minimum 5 Images",
    purpose:
      "Create AI model and lifestyle images for fashion brands, online stores, and new collections.",
    images: "As required — pay per image",
    imageTypes:
      "AI model images, outfit variations, lifestyle scenes, and campaign-style visuals tailored to your fashion products.",
    accuracy:
      "Reference-based production with checks for color, design, patterns, and garment details.",
    watermark: "No watermark",
    revisions: "Product images will be revised until they match the approved reference image.",
    delivery: "Ecommerce-ready JPG / PNG / WebP, as agreed",
    turnaround: "Confirmed in quote based on catalog size",
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];

export function planMessage(plan: PricingPlan) {
  return [
    "Hello Imagenmerce Team,",
    plan.name === "Starter"
      ? "I want to try your Starter Plan."
      : `I want to start the ${plan.name} Plan.`,
    "",
    `${plan.name.toUpperCase()} — ${plan.tagline}`,
    `Price: ${plan.price}`,
    `Products: ${plan.products}`,
    `Purpose: ${plan.purpose}`,
    `Images: ${plan.images}`,
    `Image Types: ${plan.imageTypes}`,
    `Product Accuracy: ${plan.accuracy}`,
    `Watermark: ${plan.watermark}`,
    `Revisions: ${plan.revisions}`,
    `Delivery: ${plan.delivery}`,
    `Turnaround: ${plan.turnaround}`,
    ...(plan.name === "Custom" && "discounts" in plan
      ? [`Discounts: ${plan.discounts}`]
      : []),
    "",
    "Thanks!",
    "",
    "[Your Name]",
    "[Contact Number]",
    "[Location]",
  ].join("\n");
}

export function planEmailUrl(plan: PricingPlan) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    "imagenmerce@gmail.com"
  )}&su=${encodeURIComponent(
    "I am Interested in Your Service"
  )}&body=${encodeURIComponent(planMessage(plan))}`;
}

export function planWhatsAppUrl(plan: PricingPlan) {
  return `https://wa.me/917011836415?text=${encodeURIComponent(
    `I am Interested in Your Service\n\n${planMessage(plan)}`
  )}`;
}
