/**
 * Blog entries data - sorted by date (newest first)
 */
export const blogEntries = [
  {
    id: 1,
    slug: 'what-it-support-taught-me',
    date: '2026-02-15',
    title: 'What IT Support Taught Me About Building Software',
    excerpt:
      "Before I wrote my first line of production code, I spent a year helping people fix their problems. Here's what that taught me about understanding users and solving real problems.",
    readTime: '5 min read',
    tags: ['Career', 'Lessons'],
    content: `
# Introduction

Before I wrote my first line of production code, I spent a year helping people fix their problems in IT Support. It was a challenging, often frustrating, but ultimately invaluable experience.

## Empathy for the User

When you're on the other end of a support call, you quickly realize that users don't care about the "elegant architecture" of your code. They care about whether the tool helps them do their job.

*   **Patience is key**: Sometimes the problem isn't technical; it's communication.
*   **Simplicity wins**: If a feature is hard to explain, it's probably hard to use.

## Debugging as a Mindset

IT Support is 90% debugging. You learn to isolate variables, check the basics (is it plugged in?), and look for patterns.

> "A problem well-stated is a problem half-solved." — Charles Kettering

## Conclusion

Those lessons stay with me every time I open my IDE. I don't just build software; I build solutions for people.
    `,
  },
  {
    id: 2,
    slug: 'two-years-vr-development',
    date: '2026-02-01',
    title: 'Two Years in VR Development: The Good and The Hard',
    excerpt:
      'Lessons from building games and experiences for Meta Quest at Kreitech — from performance optimization tricks to working effectively in agile teams.',
    readTime: '8 min read',
    tags: ['VR', 'Unity', 'Game Dev'],
    content: `
# The VR Journey

Building for VR is unlike any other platform. You're not just designing a screen; you're designing an environment.

## Performance is Everything

In VR, if your framerate drops, your users get physically ill. This taught me a level of optimization I never would have learned in web dev.

1.  **Draw call optimization**: Keeping the GPU happy.
2.  **Physics pooling**: Saving CPU cycles.
3.  **Texture compression**: Managing limited VRAM.

## The Human Factor

Designing UI in 3D space requires a completely different approach to ergonomics.

![VR Development](https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1000)

## Final Thoughts

The challenges are high, but the reward of seeing someone fully immersed in a world you built is incomparable.
    `,
  },
];
