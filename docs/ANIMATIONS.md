# Animations

## System
Animations should communicate polish, not distract.
- **Page Entrance**: `opacity: 0 -> 1`, `translateY: 20px -> 0` (400-700ms).
- **Cards**: Hover `translateY(-4px)`.
- **Buttons**: Subtle `scale(1.01)` on hover.
- **Hero Graphics**: Slow continuous floating (8-15s).

## Reduced Motion
Respect `prefers-reduced-motion`. If enabled, disable floating, unnecessary transitions, and particle effects.
