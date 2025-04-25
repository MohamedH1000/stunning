# Interactive Hero Section

A beautiful, responsive hero section with inline editing capabilities and AI-simulated content regeneration built with Next.js 15 and Tailwind CSS.

## Features

- ✨ Modern, responsive hero section design
- 🖋️ Inline text editing - click any text to edit
- 🔄 "Regenerate with AI" button to simulate AI content generation
- 📱 Fully responsive across all device sizes
- 🎨 Clean, accessible UI with Tailwind CSS


## Technologies Used

- Next.js 15
- React 18
- Tailwind CSS
- Lucide React Icons
- shadcn/ui components

## Setup Instructions

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MohamedH1000/stunning.git
cd stunning
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

```bash
/
├── app/
│   ├── page.tsx        # Main page component
│   └── layout.tsx      # Root layout
├── components/
│   ├── hero-section.tsx    # Main hero section component
│   ├── editable-text.tsx   # Reusable editable text component
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets
└── README.md               # Project documentation
```

## Usage

### Editing Text

Simply click on any text in the hero section to edit it inline. Press Enter or click outside the text area to save your changes.

### Regenerating Content

Click the "Regenerate with AI" button to simulate AI-generated content. This will randomly select new headline text, subheadline text, and a new image.

### Customization

To customize the available content for regeneration:

1. Open `components/hero-section.tsx`
2. Modify the `headlines`, `subheadlines`, and `images` arrays with your own content

## Extending the Project

Here are some ideas to extend this project:

- Add dark mode toggle
- Implement real AI integration with OpenAI or other AI services
- Add more sections to build a complete landing page
- Create multiple hero section variants/layouts
- Add animation effects

## License

link of the look vedio: https://files.fm/f/f7bcbwcjhc

MIT
