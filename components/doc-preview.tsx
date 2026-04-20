import { cn } from "@/lib/utils"

type DocVariant = "residente" | "fronteirico"

type DocPreviewProps = {
  variant?: DocVariant
  className?: string
}

const COPY: Record<DocVariant, { badge: string; code: string; aria: string }> = {
  residente: {
    badge: "Residente — Mercosul",
    code: "RNM • BRA",
    aria: "Simulação de CRNM para residente Mercosul",
  },
  fronteirico: {
    badge: "Fronteiriço",
    code: "RF • BRA",
    aria: "Simulação de CRNM para residente fronteiriço",
  },
}

export function DocPreview({ variant = "residente", className }: DocPreviewProps) {
  const isResidente = variant === "residente"
  const copy = COPY[variant]

  const bandClass = isResidente ? "bg-primary" : "bg-secondary"
  const badgeClass = isResidente
    ? "bg-primary/10 text-primary"
    : "bg-secondary text-secondary-foreground"
  const codeClass = isResidente ? "text-primary" : "text-muted-foreground"

  return (
    <div
      role="img"
      aria-label={copy.aria}
      className={cn(
        "card-interactive relative aspect-[1.586/1] w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md",
        className,
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5", bandClass)} aria-hidden="true" />

      <div className="flex h-full flex-col gap-3 p-5 pt-6">
        <header className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              República Federativa do Brasil
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">
              Carteira de Registro Nacional Migratório
            </span>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-sm border border-border px-1.5 py-0.5 font-mono text-[10px] font-semibold",
              codeClass,
            )}
          >
            {copy.code}
          </span>
        </header>

        <div className="grid flex-1 grid-cols-[64px_1fr] gap-4">
          <div
            aria-hidden="true"
            className="flex items-end justify-center rounded-md border border-border bg-muted p-1.5"
          >
            <div className="h-10 w-10 rounded-full bg-secondary" />
          </div>

          <div className="flex flex-col justify-between gap-2 py-0.5">
            <DocField label="Nome / Name" width="w-full" />
            <DocField label="Nacionalidade" width="w-4/5" />
            <div className="grid grid-cols-2 gap-3">
              <DocField label="RNM Nº" width="w-3/4" />
              <DocField label="Validade" width="w-2/3" />
            </div>
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-border pt-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            Classificação
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
              badgeClass,
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", bandClass)} aria-hidden="true" />
            {copy.badge}
          </span>
        </footer>
      </div>
    </div>
  )
}

function DocField({ label, width }: { label: string; width: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      <span
        aria-hidden="true"
        className={cn("h-1.5 rounded-full bg-foreground/15", width)}
      />
    </div>
  )
}
