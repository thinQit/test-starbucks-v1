import { NextResponse } from "next/server";

const locations = [
  {
    id: "sea-pike",
    name: "Starbucks — Pike Street",
    address: "1912 Pike St, Seattle, WA 98101",
    phone: "(206) 555-0138",
    hours: ["Mon–Fri: 5:30 AM – 7:00 PM", "Sat: 6:00 AM – 7:00 PM", "Sun: 6:00 AM – 6:00 PM"],
    amenities: ["Mobile Order & Pay", "Seating", "Free Wi‑Fi"],
    coords: { lat: 47.6145, lng: -122.3298 },
  },
  {
    id: "sea-1st-yesler",
    name: "Starbucks — 1st & Yesler",
    address: "505 1st Ave S, Seattle, WA 98104",
    phone: "(206) 555-0181",
    hours: ["Mon–Fri: 6:00 AM – 6:30 PM", "Sat–Sun: 7:00 AM – 6:00 PM"],
    amenities: ["Pickup", "Seating"],
    coords: { lat: 47.6019, lng: -122.3338 },
  },
];

export async function GET() {
  try {
    return NextResponse.json(
      {
        defaultCenter: { lat: 47.6097, lng: -122.3331 },
        locations,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/locations error:", error);
    return NextResponse.json({ error: "Failed to fetch locations." }, { status: 500 });
  }
}
