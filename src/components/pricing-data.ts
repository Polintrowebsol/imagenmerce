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
    price: "$18 / SKU",
    products: "1-99 SKUs",
    purpose: "Complete Amazon / Shopify / Ecommerce listing",
    images: "6 ecommerce images per product",
    imageTypes:
      "Hero, angle, detail, lifestyle, feature/benefit, and dimensions — selected according to the product.",
    accuracy:
      "Reference-based production with detailed product consistency and visual accuracy checks.",
    watermark: "No watermark",
    revisions: "No revision rounds",
    delivery: "Ecommerce-ready JPG / PNG / WebP, as agreed",
    turnaround: "Confirmed in quote",
  },
  {
    name: "Custom",
    tagline: "Flexible Ecommerce Imaging at Scale",
    price: "$3 / image",
    products: "Custom SKU volume",
    purpose:
      "For large catalogs, bulk image production, and ongoing ecommerce content needs",
    images: "As required — pay per image",
    imageTypes:
      "Hero, angle, detail, lifestyle, feature/benefit, dimensions, or other product-focused visuals as required.",
    accuracy:
      "Reference-based production with enhanced product accuracy, visual consistency, and final QA checks.",
    watermark: "No watermark",
    revisions: "Up to 2 SKU revision rounds🔸",
    delivery: "Ecommerce-ready JPG / PNG / WebP, as agreed",
    discounts: "1,000+ images: 2% off🔸",
    turnaround: "Confirmed in quote",
  },
  {
    name: "Fashion",
    tagline: "AI models & lifestyle images🔹",
    price: "From $6 / Image",
    products: "Minimum 5-10 SKU",
    purpose:
      "Create AI model and lifestyle images for fashion brands, online stores, and new collections.",
    images: "As required — pay per image",
    imageTypes:
      "AI model images, outfit and styling variations, lifestyle scenes, and campaign-style visuals, selected according to the product and brief.",
    accuracy:
      " Reference-based production with checks for garment color, design, patterns, fit, and key details, subject to AI-generation limitations.",
    watermark: "No watermark",
    revisions: "Confirmed in quote based on project scope🔹",
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
