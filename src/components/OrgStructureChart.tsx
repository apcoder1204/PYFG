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

function OrgCard({
  node,
  variant = "default",
  hasChildren,
  expanded,
  onToggle,
  onOpenDetail,
}: {
  node: OrgNodeData;
  variant?: "default" | "advisory" | "root";
  hasChildren: boolean;
  expanded: boolean;
  onToggle?: () => void;
  onOpenDetail: () => void;
}) {
  return (
    <div
      className={`relative rounded-2xl border bg-white px-4 py-3 text-center shadow-sm transition hover:shadow-md ${
        variant === "advisory"
          ? "border-dashed border-primary/40 ring-1 ring-primary/10"
          : variant === "root"
            ? "border-slate-200 ring-2 ring-primary/20"
            : "border-slate-200"
      }`}
    >
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
          className="min-w-0 flex-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            {node.photoUrl && (
              <img
                src={node.photoUrl}
                alt={node.name ? `${node.name}, ${node.title}` : node.title}
                className="mx-auto h-18 w-18 shrink-0 rounded-full object-contain ring-2 ring-primary/25 sm:mx-0 sm:h-16 sm:w-16"
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
      {variant === "advisory" && (
        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-primary/80">Advisory</p>
      )}
    </div>
  );
}

function Subtree({
  node,
  depth,
  collapsed,
  toggle,
  onSelect,
}: {
  node: OrgNodeData;
  depth: number;
  collapsed: Set<string>;
  toggle: (id: string) => void;
  onSelect: (node: OrgNodeData) => void;
}) {
  const children = node.children ?? [];
  const hasChildren = children.length > 0;
  const expanded = !collapsed.has(node.id);

  return (
    <div className={depth === 0 ? "" : "mt-3"}>
      <OrgCard
        node={node}
        variant={depth === 0 ? "default" : "default"}
        hasChildren={hasChildren}
        expanded={expanded}
        onToggle={hasChildren ? () => toggle(node.id) : undefined}
        onOpenDetail={() => onSelect(node)}
      />
      {hasChildren && expanded && (
        <div className="relative ml-2 border-l-2 border-primary/25 pl-4 sm:ml-3 sm:pl-5">
          {children.map((child) => (
            <Subtree
              key={child.id}
              node={child}
              depth={depth + 1}
              collapsed={collapsed}
              toggle={toggle}
              onSelect={onSelect}
            />
          ))}
        </div>
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
  const left = children[0];
  const right = children[1];

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
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
        <div className="w-full max-w-sm lg:w-auto lg:max-w-xs">
          <OrgCard
            node={tree}
            variant="root"
            hasChildren={children.length > 0}
            expanded={!collapsed.has(tree.id)}
            onToggle={children.length > 0 ? () => toggle(tree.id) : undefined}
            onOpenDetail={() => setDetail(tree)}
          />
        </div>

        <div className="flex items-center justify-center gap-2 lg:gap-0">
          <div className="hidden h-px w-10 bg-primary/35 lg:block" />
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 lg:bg-transparent lg:px-2 lg:py-0">
            Advises
          </span>
          <div className="hidden h-px w-10 bg-primary/35 lg:block" />
        </div>

        <div className="flex w-full max-w-sm flex-1 flex-col justify-center lg:max-w-xs">
          <OrgCard
            node={board}
            variant="advisory"
            hasChildren={false}
            expanded
            onOpenDetail={() => setDetail(board)}
          />
        </div>
      </div>

      {!collapsed.has(tree.id) && (
        <>
          <div className="mx-auto flex h-10 w-px justify-center bg-primary/30 lg:h-12" />

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-1/2 top-0 hidden h-px w-[min(100%,28rem)] -translate-x-1/2 bg-primary/30 md:block" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              <div className="relative md:pt-6">
                <div className="absolute left-1/2 top-0 hidden h-6 w-px -translate-x-1/2 bg-primary/30 md:block" />
                {left && (
                  <Subtree node={left} depth={0} collapsed={collapsed} toggle={toggle} onSelect={setDetail} />
                )}
              </div>
              <div className="relative md:pt-6">
                <div className="absolute left-1/2 top-0 hidden h-6 w-px -translate-x-1/2 bg-primary/30 md:block" />
                {right && (
                  <Subtree node={right} depth={0} collapsed={collapsed} toggle={toggle} onSelect={setDetail} />
                )}
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
