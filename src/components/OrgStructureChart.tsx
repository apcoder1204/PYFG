import { useCallback, useEffect, useState } from "react";
import type { OrgNodeData } from "../data/orgStructure";

type Props = {
  board: OrgNodeData;
  tree: OrgNodeData;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function rankLabel(depth: number) {
  return `Tier ${depth + 1}`;
}

function OrgCard({
  node,
  variant = "default",
  hasChildren,
  expanded,
  onToggle,
  onOpenDetail,
  treeDepth = 0,
  showRank = false,
  photoSize = "md",
}: {
  node: OrgNodeData;
  variant?: "default" | "advisory" | "root";
  hasChildren: boolean;
  expanded: boolean;
  onToggle?: () => void;
  onOpenDetail: () => void;
  /** Depth within a branch subtree (0 = direct CEO report). */
  treeDepth?: number;
  /** When true, show a compact rank strip (helps on narrow screens). */
  showRank?: boolean;
  /** Larger portraits for CEO / Board / executive row. */
  photoSize?: "md" | "lg";
}) {
  const photoClass =
    photoSize === "lg"
      ? "mx-auto h-20 w-20 shrink-0 rounded-full object-contain ring-2 ring-primary/25 sm:mx-0 sm:h-[5.25rem] sm:w-[5.25rem]"
      : "mx-auto h-16 w-16 shrink-0 rounded-full object-contain ring-2 ring-primary/25 sm:mx-0";

  return (
    <div
      className={`relative rounded-2xl border bg-white px-3 py-3 text-center shadow-sm transition hover:shadow-md sm:px-4 ${
        variant === "advisory"
          ? "border-dashed border-primary/40 ring-1 ring-primary/10"
          : variant === "root"
            ? "border-slate-200 ring-2 ring-primary/20"
            : "border-slate-200"
      }`}
    >
      {showRank && variant === "default" && (
        <p className="mb-2 border-b border-slate-100 pb-2 text-left text-[10px] font-bold uppercase tracking-wide text-primary/90">
          {rankLabel(treeDepth)}
        </p>
      )}
      <div className="flex items-start gap-2">
        {hasChildren ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle?.();
            }}
            className="mt-0.5 shrink-0 rounded-lg p-0.5 text-primary hover:bg-primary/10"
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse branch" : "Expand branch"}
          >
            <Chevron open={expanded} />
          </button>
        ) : (
          <span className="mt-0.5 inline-block w-5 shrink-0" aria-hidden />
        )}
        <button
          type="button"
          onClick={onOpenDetail}
          className="min-w-0 flex-1 rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            {node.photoUrl && (
              <img
                src={node.photoUrl}
                alt={node.name ? `${node.name}, ${node.title}` : node.title}
                className={photoClass}
              />
            )}
            <div className="min-w-0 flex-1">
              <span
                className={`block font-semibold leading-snug text-dark hover:text-primary ${
                  variant === "advisory" ? "text-sm" : "text-sm sm:text-base"
                }`}
              >
                {node.title}
              </span>
              {node.name && (
                <span className="mt-0.5 block text-xs font-medium text-slate-600">{node.name}</span>
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

function Subtree({
  node,
  depth,
  collapsed,
  toggle,
  onSelect,
  showRankStrip = true,
}: {
  node: OrgNodeData;
  depth: number;
  collapsed: Set<string>;
  toggle: (id: string) => void;
  onSelect: (node: OrgNodeData) => void;
  showRankStrip?: boolean;
}) {
  const children = node.children ?? [];
  const hasChildren = children.length > 0;
  const expanded = !collapsed.has(node.id);

  return (
    <div className={depth === 0 ? "" : "mt-3"}>
      <OrgCard
        node={node}
        variant="default"
        hasChildren={hasChildren}
        expanded={expanded}
        onToggle={hasChildren ? () => toggle(node.id) : undefined}
        onOpenDetail={() => onSelect(node)}
        treeDepth={depth}
        showRank={showRankStrip}
      />
      {hasChildren && expanded && (
        <ul className="relative mt-2 min-w-0 list-none space-y-2 border-l-2 border-primary/35 pl-3 sm:ml-0.5 sm:pl-5">
          {children.map((child) => (
            <li key={child.id} className="relative min-w-0">
              <span
                className="pointer-events-none absolute left-0 top-[1.35rem] block h-px w-3 -translate-x-3 bg-primary/35 sm:w-4 sm:-translate-x-5"
                aria-hidden
              />
              <Subtree
                node={child}
                depth={depth + 1}
                collapsed={collapsed}
                toggle={toggle}
                onSelect={onSelect}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function OrgStructureChart({ board, tree }: Props) {
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [detail, setDetail] = useState<OrgNodeData | null>(null);

  const toggle = useCallback((id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const children = tree.children ?? [];
  const deputy = children[0];
  const ops = children[1];
  const adminManager = deputy?.children?.[0];
  const commInfoManager = ops?.children?.[0];

  useEffect(() => {
    if (!detail) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetail(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [detail]);

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex min-w-0 max-w-5xl flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
        <div className="w-full min-w-0 max-w-sm shrink-0 lg:max-w-xs">
          <OrgCard
            node={tree}
            variant="root"
            hasChildren={children.length > 0}
            expanded={!collapsed.has(tree.id)}
            onToggle={children.length > 0 ? () => toggle(tree.id) : undefined}
            onOpenDetail={() => setDetail(tree)}
            photoSize="lg"
          />
        </div>

        <div className="h-10 w-px shrink-0 bg-primary/45 lg:hidden" aria-hidden />
        <div className="hidden h-px w-20 shrink-0 bg-primary/45 lg:block" aria-hidden />

        <div className="w-full min-w-0 max-w-sm shrink-0 lg:max-w-xs">
          <OrgCard
            node={board}
            variant="advisory"
            hasChildren={false}
            expanded
            onOpenDetail={() => setDetail(board)}
            photoSize="lg"
          />
        </div>
      </div>

      {!collapsed.has(tree.id) && (
        <>
          <div className="mx-auto mt-2 flex h-8 w-px shrink-0 bg-primary/45 sm:h-10" aria-hidden />

          <div className="mx-auto mt-1 w-full min-w-0 max-w-5xl px-1 sm:px-3">
            {/* Deputy CEO —→ Operation Manager; fork from midpoint of connector */}
            <div className="mx-auto grid w-full min-w-0 max-w-4xl grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(4.5rem,7rem)_minmax(0,1fr)] sm:items-start sm:gap-x-2 md:gap-x-4">
              <div className="min-w-0 sm:justify-self-end sm:pr-1">
                {deputy && (
                  <OrgCard
                    node={deputy}
                    variant="default"
                    hasChildren={false}
                    expanded
                    onOpenDetail={() => setDetail(deputy)}
                    photoSize="lg"
                  />
                )}
              </div>

              <div
                className="relative mx-auto flex min-h-[5.5rem] w-full max-w-[7rem] flex-col items-center sm:mx-0 sm:min-h-[6.5rem]"
                aria-hidden
              >
                <div className="relative mt-2 hidden h-10 w-full sm:block">
                  <div className="absolute left-0 right-[10px] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-primary/50" />
                  <svg
                    className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M6 5l12 7-12 7V5z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center py-2 sm:hidden">
                  <div className="h-6 w-[3px] rounded-full bg-primary/50" />
                  <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 16l-8-8h16l-8 8z" />
                  </svg>
                </div>
                <div className="mt-0 flex flex-1 flex-col items-center sm:mt-1">
                  <div className="min-h-[2.25rem] w-[3px] flex-1 rounded-full bg-primary/50 sm:min-h-[2.75rem]" />
                </div>
              </div>

              <div className="min-w-0 sm:justify-self-start sm:pl-1">
                {ops && (
                  <OrgCard
                    node={ops}
                    variant="default"
                    hasChildren={false}
                    expanded
                    onOpenDetail={() => setDetail(ops)}
                    photoSize="lg"
                  />
                )}
              </div>

              {/* Fork from midpoint: Administrative manager | Communication & Information manager */}
              <div className="relative -mt-1 flex flex-col items-center sm:col-span-3">
                <div className="h-6 w-[3px] rounded-full bg-primary/50 sm:h-8" aria-hidden />
                <svg
                  className="h-14 w-full max-w-md text-primary/55 sm:h-16 sm:max-w-lg"
                  viewBox="0 0 360 56"
                  preserveAspectRatio="xMidYMin meet"
                  aria-hidden
                >
                  <path
                    d="M180 0v10 M48 10h264 M96 10v22 M264 10v22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="max-w-xs text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  Line 1 (left) · Line 2 (right)
                </p>
              </div>
            </div>

            <div className="mx-auto mt-2 grid min-w-0 max-w-5xl grid-cols-1 gap-8 border-t border-slate-200/80 pt-8 sm:grid-cols-2 sm:gap-6 lg:gap-10">
              <div className="min-w-0 rounded-2xl border border-primary/20 bg-gradient-to-b from-slate-50/95 to-white p-4 shadow-sm ring-1 ring-slate-100/80 sm:p-5">
                <header className="mb-4 border-b border-slate-200/80 pb-3 text-center sm:text-left">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">Line 1</p>
                  <p className="mt-1 text-xs font-bold text-slate-700">Administrative chain</p>
                </header>
                {adminManager ? (
                  <Subtree
                    node={adminManager}
                    depth={0}
                    collapsed={collapsed}
                    toggle={toggle}
                    onSelect={setDetail}
                  />
                ) : null}
              </div>
              <div className="min-w-0 rounded-2xl border border-primary/20 bg-gradient-to-b from-slate-50/95 to-white p-4 shadow-sm ring-1 ring-slate-100/80 sm:p-5">
                <header className="mb-4 border-b border-slate-200/80 pb-3 text-center sm:text-left">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">Line 2</p>
                  <p className="mt-1 text-xs font-bold text-slate-700">Communications chain</p>
                </header>
                {commInfoManager ? (
                  <Subtree
                    node={commInfoManager}
                    depth={0}
                    collapsed={collapsed}
                    toggle={toggle}
                    onSelect={setDetail}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}

      {detail && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/60 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="org-detail-title"
          onClick={() => setDetail(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="org-detail-title" className="text-xl font-extrabold text-dark">
                {detail.title}
              </h2>
              <button
                type="button"
                onClick={() => setDetail(null)}
                className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {detail.photoUrl && (
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={detail.photoUrl}
                  alt={detail.name ? `${detail.name}, ${detail.title}` : detail.title}
                  className="h-20 w-20 shrink-0 rounded-2xl object-contain ring-1 ring-slate-200"
                />
                {detail.name && <p className="font-semibold text-slate-800">{detail.name}</p>}
              </div>
            )}
            {!detail.photoUrl && detail.name && (
              <p className="mt-2 font-semibold text-slate-800">{detail.name}</p>
            )}
            <p className="mt-4 text-slate-600 leading-relaxed">{detail.summary}</p>
            <button
              type="button"
              onClick={() => setDetail(null)}
              className="mt-6 w-full rounded-2xl bg-primary py-3 font-bold text-white hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
