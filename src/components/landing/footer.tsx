// src/components/footer.tsx
export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:px-6">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            HIMA TI Dev Team
          </a>
          . The source code is available on GitHub.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nexus Varsity Guild.
        </p>
      </div>
    </footer>
  );
}