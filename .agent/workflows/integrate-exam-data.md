---
description: Workflow for interpreting and integrating new exam data into the application
---

# Integrate Exam Data Workflow

This workflow outlines the steps to integrate new exam data (Past and Original) into `src/data/mockData.js`.
**CRITICAL**: Follow the specific design standards for Syntax Analysis and Comparison Tables described below.

## 1. Syntax Analysis Formatting (`syntax` field)

When adding the `syntax` field to the `analysis` object, you **MUST** use the following HTML structure instead of Markdown or other formats.

### Design Rules:
1.  **Compact Design**: Do NOT include `<h4>` headers (e.g., "構造分解", "ポイント") inside the syntax boxes.
2.  **Highlighting**: The main verb in the target sentence (inside `<blockquote>`) **MUST** be bolded using `<b>`.
3.  **Classes**: Use `syntax-box-structure` for structure analysis and `syntax-box-point` for key points.

### Template:

```javascript
syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1): [English Title] ([Japanese Title])</h3>

<blockquote>[Target Sentence part 1] <b>[Main Verb]</b> [Target Sentence part 2].</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> ...</li>
    <li><b>Verb (動詞):</b> ...</li>
    <li><b>Object (目的語):</b> ...</li>
    <!-- Add other elements as needed -->
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>[Detailed explanation of key grammar points or logic]</p>
</div>

<!-- Repeat for Q2, Q3, Q4, Q5 -->
`
```

## 2. Comparison Table Styling

The comparison table is styled via CSS. Ensure the data provided matches the expected columns.
**Note**: The font size for the comparison table is set to **0.85rem** in `.comparison-table` class in `src/styles/index.css` to ensure readability. Do not override this with inline styles unless strictly necessary.

## 3. CSS Classes Reference

Ensure `src/styles/index.css` maintains these classes for the syntax boxes to look correct:

```css
.syntax-box {
    padding: 0.75rem;       /* Compact padding */
    margin-bottom: 1rem;
    /* ... other styles */
}

.syntax-box > :last-child {
    margin-bottom: 0;       /* Remove bottom margin for compactness */
}
```

## 4. Verification Steps

After integrating data, verify the following in the code (do NOT use DOM/Browser if not allowed):
1.  **Check `mockData.js`**: Verify `syntax` string contains `<div class="syntax-box syntax-box-structure">` and **NO** `<h4>` tags inside those divs.
2.  **Check `mockData.js`**: Verify `<blockquote>` content has `<b>` tags around verbs.
3.  **Check `index.css`**: Verify `.comparison-table` has `font-size: 0.85rem`.
