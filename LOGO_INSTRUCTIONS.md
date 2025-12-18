# How to Add Your Hamso Logo

## Steps to replace the logo:

1. **Save your logo image:**

   - Save your Hamso logo as a PNG file
   - Name it `hamso-logo.png`
   - Place it in the `/Users/beniamin/Documents/umami-hamso/umami/public/` directory
   - This will replace the placeholder file

2. **For a white version (optional):**

   - If you want a separate white logo for dark mode, save it as `hamso-logo-white.png`
   - Then update the `LogoWhite.tsx` component to use this file instead

3. **Rebuild the Docker container:**
   ```bash
   docker compose up -d --build
   ```

## Current Configuration:

- Logo size: 120px width (auto height)
- Location: Both Logo.tsx and LogoWhite.tsx use the same file: `/hamso-logo.png`
- Text labels: Removed from all locations (navigation, headers, footers)
- The logo now displays without any text alongside it

## Files Updated:

- `/src/components/svg/Logo.tsx` - Now uses PNG image instead of SVG
- `/src/components/svg/LogoWhite.tsx` - Now uses PNG image instead of SVG
- `/src/app/(main)/SideNav.tsx` - Removed "hamso" text label
- `/src/app/(main)/MobileNav.tsx` - Removed "hamso" text label
- `/src/app/share/[...shareId]/Header.tsx` - Removed "hamso" text label
- `/src/app/share/[...shareId]/Footer.tsx` - Changed to "hamso"

## To adjust logo size:

Edit the `width` value in:

- `/src/components/svg/Logo.tsx`
- `/src/components/svg/LogoWhite.tsx`

Change `width: '120px'` to your desired size.
