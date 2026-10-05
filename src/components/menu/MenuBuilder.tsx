import { useEffect, useMemo, useState } from "react";
import { getMenuItems } from "../../services/menuService";
import type {
  MenuCategory,
  MenuItem,
  MenuSubcategory,
} from "../../types/menu";
import MenuItemCard from "./MenuItemCard";

const categories: MenuCategory[] = [
  "Khai vị",
  "Món chính",
  "Món no",
  "Tráng miệng",
];

const subcategories: Record<MenuCategory, MenuSubcategory[]> = {
  "Khai vị": [
    "Súp",
    "Chả, chiên & món phụ",
    "Gỏi",
  ],

  "Món chính": [
    "Heo",
    "Bò + Bê",
    "Gà",
    "Tôm",
    "Mực",
    "Hải sâm",
    "Cua",
    "Cá",
    "Vịt",
    "Đà điểu",
    "Nai",
    "Thỏ",
    "Lẩu",
  ],

  "Món no": [
    "Cơm",
    "Xôi",
  ],

  "Tráng miệng": [],
};

const ITEMS_PER_PAGE_DESKTOP = 8;
const ITEMS_PER_PAGE_MOBILE = 5;

export default function MenuBuilder() {
  const [items, setItems] = useState<MenuItem[]>([]);

  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("Khai vị");

  const [activeSubcategory, setActiveSubcategory] =
    useState<MenuSubcategory | "Tất cả">("Tất cả");

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(
    ITEMS_PER_PAGE_DESKTOP
  );

  const [isSelectedExpanded, setIsSelectedExpanded] =
    useState(false);

  useEffect(() => {
    getMenuItems().then(setItems);
  }, []);

  // =====================================================
  // RESPONSIVE ITEMS PER PAGE
  // Desktop: 8
  // Mobile: 5
  // =====================================================
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 1023px)"
    );

    const updateItemsPerPage = () => {
      setItemsPerPage(
        mediaQuery.matches
          ? ITEMS_PER_PAGE_MOBILE
          : ITEMS_PER_PAGE_DESKTOP
      );

      setCurrentPage(1);
    };

    updateItemsPerPage();

    mediaQuery.addEventListener(
      "change",
      updateItemsPerPage
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateItemsPerPage
      );
    };
  }, []);

  // =====================================================
  // CURRENT SUBCATEGORIES
  // =====================================================
  const currentSubcategories =
    subcategories[activeCategory];

  // =====================================================
  // FILTER + SIGNATURE SORT
  // =====================================================
  const filteredItems = useMemo(() => {
    let result = items.filter(
      (item) => item.category === activeCategory
    );

    if (activeSubcategory !== "Tất cả") {
      result = result.filter(
        (item) =>
          item.subcategory === activeSubcategory
      );
    }

    // Signature lên đầu
    result = [...result].sort((a, b) => {
      if (a.signature === b.signature) {
        return 0;
      }

      return a.signature ? -1 : 1;
    });

    return result;
  }, [
    items,
    activeCategory,
    activeSubcategory,
  ]);

  // =====================================================
  // PAGINATION
  // =====================================================
  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredItems.length / itemsPerPage
    )
  );

  const paginatedItems = useMemo(() => {
    const startIndex =
      (currentPage - 1) * itemsPerPage;

    return filteredItems.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  }, [
    filteredItems,
    currentPage,
    itemsPerPage,
  ]);

  // =====================================================
  // PLACEHOLDER
  // Keeps grid height stable
  // =====================================================
  const emptySlots = Math.max(
    0,
    itemsPerPage - paginatedItems.length
  );

  // =====================================================
  // TOGGLE SELECTED ITEM
  // =====================================================
  const toggle = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter(
            (itemId) => itemId !== id
          )
        : [...current, id]
    );
  };

  // =====================================================
  // CATEGORY CHANGE
  // =====================================================
  const handleCategoryChange = (
    category: MenuCategory
  ) => {
    setActiveCategory(category);
    setActiveSubcategory("Tất cả");
    setCurrentPage(1);
  };

  // =====================================================
  // SUBCATEGORY CHANGE
  // =====================================================
  const handleSubcategoryChange = (
    subcategory:
      | MenuSubcategory
      | "Tất cả"
  ) => {
    setActiveSubcategory(subcategory);
    setCurrentPage(1);
  };

  // =====================================================
  // SELECTED ITEMS
  // =====================================================
  const selectedItems = useMemo(
    () =>
      items.filter((item) =>
        selectedIds.includes(item.id)
      ),
    [items, selectedIds]
  );

  // =====================================================
  // TOTAL
  // =====================================================
  const hasPriceByMarket = selectedItems.some(
    (item) =>
      String(item.price)
        .trim()
        .toLowerCase() === "theo thời giá"
  );

  const numericTotal = selectedItems.reduce(
    (sum, item) => {
      const price = Number(item.price);

      if (Number.isNaN(price)) {
        return sum;
      }

      return sum + price;
    },
    0
  );

  const total = hasPriceByMarket
    ? "Theo thời giá"
    : `${numericTotal.toLocaleString("vi-VN")}đ`;

  return (
    <div className="w-full">

      {/* =================================================
          CATEGORY
          ================================================= */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() =>
              handleCategoryChange(category)
            }
            className={`
              shrink-0
              whitespace-nowrap
              rounded-full
              px-4
              py-2
              font-label-sm
              text-label-sm
              transition-colors
              ${
                activeCategory === category
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* =================================================
          SUBCATEGORY
          Fixed height + horizontal scroll
          ================================================= */}
      <div className="mt-2 h-12 w-full min-w-0">
        {currentSubcategories.length > 0 && (
          <div
            className="
              flex
              h-full
              w-full
              min-w-0
              items-start
              gap-2
              overflow-x-auto
              overflow-y-hidden
              pb-2
              scrollbar-none
              touch-pan-x
              overscroll-x-contain
            "
          >
            {/* Tất cả */}
            <button
              type="button"
              onClick={() =>
                handleSubcategoryChange(
                  "Tất cả"
                )
              }
              className={`
                shrink-0
                whitespace-nowrap
                rounded-full
                px-4
                py-2
                font-label-sm
                text-label-sm
                transition-colors
                ${
                  activeSubcategory ===
                  "Tất cả"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-high text-on-surface-variant"
                }
              `}
            >
              Tất cả
            </button>

            {/* Subcategories */}
            {currentSubcategories.map(
              (subcategory) => (
                <button
                  key={subcategory}
                  type="button"
                  onClick={() =>
                    handleSubcategoryChange(
                      subcategory
                    )
                  }
                  className={`
                    shrink-0
                    whitespace-nowrap
                    rounded-full
                    px-4
                    py-2
                    font-label-sm
                    text-label-sm
                    transition-colors
                    ${
                      activeSubcategory ===
                      subcategory
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container-high text-on-surface-variant"
                    }
                  `}
                >
                  {subcategory}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {/* =================================================
          MENU GRID
          Desktop: 8
          Mobile: 5
          ================================================= */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-3
          mt-2
        "
      >
        {paginatedItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            selected={selectedIds.includes(
              item.id
            )}
            onToggle={() =>
              toggle(item.id)
            }
          />
        ))}

        {/* Placeholder */}
        {Array.from({
          length: emptySlots,
        }).map((_, index) => (
          <div
            key={`empty-${index}`}
            aria-hidden="true"
            className="invisible"
          >
            <div className="h-full min-h-[120px]" />
          </div>
        ))}
      </div>

      {/* =================================================
          PAGINATION
          ================================================= */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((page) =>
                Math.max(1, page - 1)
              )
            }
            className="
              rounded-full
              px-4
              py-2
              bg-surface-container-high
              text-on-surface-variant
              disabled:opacity-40
              disabled:cursor-not-allowed
              transition-opacity
            "
          >
            ←
          </button>

          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {currentPage} / {totalPages}
          </span>

          <button
            type="button"
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              setCurrentPage((page) =>
                Math.min(
                  totalPages,
                  page + 1
                )
              )
            }
            className="
              rounded-full
              px-4
              py-2
              bg-surface-container-high
              text-on-surface-variant
              disabled:opacity-40
              disabled:cursor-not-allowed
              transition-opacity
            "
          >
            →
          </button>
        </div>
      )}

      {/* =================================================
          SELECTED / TOTAL
          ================================================= */}
      <div className="sticky bottom-3 z-20 mt-6 overflow-hidden rounded-xl bg-primary text-on-primary shadow-xl">

        {/* SUMMARY */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-4">

            <div className="min-w-0">
              <div className="font-label-sm text-label-sm opacity-80">
                MÓN ĐÃ CHỌN
              </div>

              <div className="font-headline-sm text-headline-sm">
                {selectedItems.length} món
              </div>

              {selectedItems.length > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    setIsSelectedExpanded(
                      (current) => !current
                    )
                  }
                  className="
                    mt-1
                    inline-flex
                    items-center
                    gap-1
                    text-sm
                    font-medium
                    text-on-primary/80
                    hover:text-on-primary
                    transition-colors
                  "
                >
                  <span>
                    {isSelectedExpanded
                      ? "Thu gọn"
                      : "Xem chi tiết"}
                  </span>

                  <span
                    className={`
                      material-symbols-outlined
                      text-[18px]
                      transition-transform
                      duration-300
                      ${
                        isSelectedExpanded
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  >
                    keyboard_arrow_down
                  </span>
                </button>
              )}
            </div>

            <div className="shrink-0 text-right">
              <div className="font-label-sm text-label-sm opacity-80">
                TẠM TÍNH
              </div>

              <div className="font-headline-sm text-headline-sm">
                {total}
              </div>
            </div>

          </div>
        </div>

        {/* SELECTED DETAIL */}
        <div
          className={`
            grid
            transition-[grid-template-rows]
            duration-300
            ease-out
            ${
              isSelectedExpanded &&
              selectedItems.length > 0
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }
          `}
        >
          <div className="overflow-hidden">

            <div className="mx-3 mb-3 overflow-hidden rounded-lg bg-white text-primary shadow-sm">

              <div className="max-h-[280px] overflow-y-auto">

                {selectedItems.map(
                  (item, index) => {
                    const isPriceByMarket =
                      String(item.price)
                        .trim()
                        .toLowerCase() ===
                      "theo thời giá";

                    const formattedPrice =
                      isPriceByMarket
                        ? "Theo thời giá"
                        : `${Number(
                            item.price
                          ).toLocaleString(
                            "vi-VN"
                          )}đ`;

                    return (
                      <div
                        key={item.id}
                        className="
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          border-b
                          border-primary/10
                          last:border-b-0
                        "
                      >
                        <span className="w-5 shrink-0 text-sm font-semibold text-primary/60">
                          {index + 1}.
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-medium text-primary">
                            {item.name}
                          </div>
                        </div>

                        <div className="shrink-0 text-sm font-semibold text-primary">
                          {formattedPrice}
                        </div>

                        <button
                          type="button"
                          aria-label={`Xóa ${item.name}`}
                          onClick={() =>
                            toggle(item.id)
                          }
                          className="
                            shrink-0
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            text-primary/60
                            hover:bg-primary/10
                            hover:text-primary
                            transition-colors
                          "
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            close
                          </span>
                        </button>
                      </div>
                    );
                  }
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}