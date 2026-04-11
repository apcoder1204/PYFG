import { useCallback, useEffect, useMemo, useState } from "react";
import { Seo } from "../components/Seo";
import {
  categoryLabels,
  galleryCategories,
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from "../data/galleryImages";

export function PhotoGalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === filter);
  }, [filter]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, closeLightbox]);

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <Seo
        title="Photo Gallery | PYFG Tanzania"
        description="Daily activities and field moments from PYFG Tanzania—events, field work, and meetings."
      />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Daily activities</p>
          <h1 className="mt-2 text-3xl font-extrabold text-dark sm:text-4xl">Photo Gallery</h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            A visual snapshot of our operations—community events, field outreach, and team coordination.
            Hover for a quick preview; click any image to open the full view.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === c.id ? "bg-primary text-white shadow-glow" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightbox(img)}
              className="group relative overflow-hidden rounded-3xl bg-slate-200 text-left shadow-sm ring-1 ring-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary">{categoryLabels[img.category]}</p>
                <p className="mt-1 line-clamp-2 text-sm font-semibold text-white">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-slate-600">No images in this category yet.</p>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/80 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] overflow-hidden bg-slate-100">
              <img src={lightbox.src} alt={lightbox.alt} className="max-h-[70vh] w-full object-contain" />
            </div>
            <div className="space-y-2 p-5 sm:p-6">
              <p id="lightbox-title" className="text-xs font-bold uppercase tracking-wider text-primary">
                {categoryLabels[lightbox.category]}
              </p>
              <p className="text-slate-700 leading-relaxed">{lightbox.caption}</p>
              <button
                type="button"
                onClick={closeLightbox}
                className="mt-2 w-full rounded-2xl bg-primary py-3 font-bold text-white hover:bg-teal-700 sm:w-auto sm:px-8"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
