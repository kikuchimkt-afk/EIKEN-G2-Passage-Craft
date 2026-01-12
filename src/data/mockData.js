export const AVAILABLE_YEARS = [
  { type: "separator", label: "━━━ 2級 大問3B (4問) ━━━" },
  { year: 2024, session: 1, label: "2024年第1回 (The Arts and Crafts Movement)" },
  { year: 2025, session: 2, label: "2025年第2回 (The Mirror Test)" },
  { year: 2025, session: 1, label: "2025年第1回 (History of Tea Bags)" },
  { year: 2024, session: 2, label: "2024年第2回 (Bonobos)" },
  { year: 2024, session: 3, label: "2024年第3回 (Diaries)" },
];


export const MOCK_DATA = {
  "2024-1": {
    past: {
      title: "The Arts and Crafts Movement",
      content: `## Title: The Arts and Crafts Movement

In the United Kingdom during the nineteenth century, new technology greatly changed how people lived. Until this time, many people lived on small farms. They worked with their family members and neighbors to make by hand what they needed to live. When new machines were invented and factories were built so that items could be produced more quickly and easily, people moved into cities to take jobs in the factories. They used the money they earned to buy the things they needed, many of which were made by machines instead of by hand.

Some people disliked these changes. In particular, one group of artists and designers believed that society would be better if people went back to the old ways of making things. They formed a group that became known as the Arts and Crafts movement to share their ideas and sell their products. Although some members produced paintings and sculptures, most made objects that could be used, such as books and fabrics that had been printed by hand, furniture, and dishes. They wanted to design beautiful, high-quality items that were useful in everyday life.

William Morris, a famous designer, was one of the most important members of the Arts and Crafts movement. He was not against the use of machines. However, he disagreed with the way that the managers of large factories produced items. These managers divided the process into small stages, with each worker only working on one stage. Morris thought workers would be happier and healthier if they were involved in the whole production process, worked in small shops, and met the people who bought and used their products.

For a while, the Arts and Crafts movement was a success. Public exhibitions were held to display and sell the products made by the members of the movement, and people in the United Kingdom and abroad were inspired to form similar organizations. During the twentieth century, however, the popularity of such products declined because they took too long to make and cost too much to buy. However, the ideas of the Arts and Crafts movement continue to influence the way that artists and designers think about their work.`,
      questions: `### Questions

**(27) How did life change for people in the United Kingdom in the nineteenth century?**
1. They left their farms and started buying things that were made in factories.
2. They began working with family members and neighbors to make things.
3. They had larger families because they were earning more money than before.
4. They began taking vacations in the countryside and by the sea for their health.

**(28) What is one thing the members of the Arts and Crafts movement believed?**
1. Machines would never be able to make objects as quickly as artists could.
2. Paintings and sculptures were not worth making because they were not useful.
3. The lives of people would improve if they returned to making things by hand.
4. Designers should specialize in producing just one or two types of items.

**(29) William Morris believed that workers in factories**
1. were not able to understand each small stage of their work.
2. did not have enough involvement in the production process.
3. had to spend too much time dealing with their customers.
4. could make more money if they worked in small shops.

**(30) People started buying fewer products made by the Arts and Crafts movement because**
1. they realized that it would be simpler to make the items themselves.
2. better-quality products were being made abroad.
3. the products were expensive and not easily available.
4. other artists and designers began to have a greater influence.

**(31) Which of the following statements is true?**
1. Technology developed in the nineteenth century had a significant effect on UK society.
2. Many artists and designers were not allowed to join the Arts and Crafts movement.
3. William Morris thought that it was wrong to use machines to produce items.
4. Items made by the Arts and Crafts movement have never been exhibited in public.

---
**Answer Key:** (27) 1, (28) 3, (29) 2, (30) 3, (31) 1`,
      translations: [
        { en: "In the United Kingdom during the nineteenth century, new technology greatly changed how people lived.", ja: "19世紀のイギリスにおいて、新しい技術は人々の生活様式を大きく変えた。" },
        { en: "Until this time, many people lived on small farms.", ja: "この時まで、多くの人々は小さな農場に住んでいた。" },
        { en: "They worked with their family members and neighbors to make by hand what they needed to live.", ja: "彼らは生きていくために必要なものを手作業で作るために、家族や隣人と協力して働いた。" },
        { en: "When new machines were invented and factories were built so that items could be produced more quickly and easily, people moved into cities to take jobs in the factories.", ja: "新しい機械が発明され、より速く簡単に物が生産できるように工場が建設されると、人々は工場での仕事に就くために都市へと移り住んだ。" },
        { en: "They used the money they earned to buy the things they needed, many of which were made by machines instead of by hand.", ja: "彼らは稼いだお金を使って必要なものを購入したが、その多くは手作業ではなく機械で作られたものだった。" },
        { en: "Some people disliked these changes.", ja: "これらの変化を嫌う人々もいた。" },
        { en: "In particular, one group of artists and designers believed that society would be better if people went back to the old ways of making things.", ja: "特に、ある芸術家やデザイナーのグループは、人々が昔の物作りの方法に戻れば社会は良くなると信じていた。" },
        { en: "They formed a group that became known as the Arts and Crafts movement to share their ideas and sell their products.", ja: "彼らは自分たちの考えを共有し、製品を販売するために、アーツ・アンド・クラフツ運動として知られるようになるグループを結成した。" },
        { en: "Although some members produced paintings and sculptures, most made objects that could be used, such as books and fabrics that had been printed by hand, furniture, and dishes.", ja: "絵画や彫刻を制作するメンバーもいたが、ほとんどのメンバーは、手刷りの本や布地、家具、食器など、実際に使える物を作った。" },
        { en: "They wanted to design beautiful, high-quality items that were useful in everyday life.", ja: "彼らは、日常生活で役に立つ、美しく高品質な品物をデザインしたいと考えていた。" },
        { en: "William Morris, a famous designer, was one of the most important members of the Arts and Crafts movement.", ja: "有名なデザイナーであるウィリアム・モリスは、アーツ・アンド・クラフツ運動の最も重要なメンバーの一人だった。" },
        { en: "He was not against the use of machines.", ja: "彼は機械の使用に反対していたわけではなかった。" },
        { en: "However, he disagreed with the way that the managers of large factories produced items.", ja: "しかし、彼は大規模工場の経営者たちが製品を生産する方法には同意しなかった。" },
        { en: "These managers divided the process into small stages, with each worker only working on one stage.", ja: "これらの経営者たちは工程を小さな段階に分け、各労働者は一つの段階だけを担当していた。" },
        { en: "Morris thought workers would be happier and healthier if they were involved in the whole production process, worked in small shops, and met the people who bought and used their products.", ja: "モリスは、もし労働者が生産工程全体に関わり、小さな店で働き、製品を買って使う人々と顔を合わせるなら、彼らはより幸せで健康的になれるだろうと考えた。" },
        { en: "For a while, the Arts and Crafts movement was a success.", ja: "しばらくの間、アーツ・アンド・クラフツ運動は成功を収めた。" },
        { en: "Public exhibitions were held to display and sell the products made by the members of the movement, and people in the United Kingdom and abroad were inspired to form similar organizations.", ja: "運動のメンバーによって作られた製品を展示販売するための一般展示会が開かれ、イギリス国内外の人々が刺激を受けて同様の組織を結成した。" },
        { en: "During the twentieth century, however, the popularity of such products declined because they took too long to make and cost too much to buy.", ja: "しかし、20世紀になると、それらの製品は作るのに時間がかかりすぎ、買うには費用がかかりすぎたため、人気は衰退した。" },
        { en: "However, the ideas of the Arts and Crafts movement continue to influence the way that artists and designers think about their work.", ja: "しかしながら、アーツ・アンド・クラフツ運動の思想は、芸術家やデザイナーが自分たちの仕事について考える方法に影響を与え続けている。" }
      ]
    },
    original: {
      title: "The Slow Food Movement",
      content: `## Title: The Slow Food Movement

In the late twentieth century, the way people ate began to change dramatically across the globe. For centuries, meals were cooked at home using fresh ingredients grown on local farms. Families would sit down together to eat and talk. However, as new technologies made life faster and busier, fast food restaurants became very popular. These restaurants allowed people to buy cheap meals that were prepared in minutes. While this was convenient, it meant that people started eating more processed foods and spent less time at the dinner table.

Many people were worried about this shift in food culture. In Italy, a man named Carlo Petrini believed that the rise of fast food was destroying traditional ways of life. In 1986, he founded the "Slow Food" movement to protect local food cultures and traditions. The members of this group wanted to encourage people to slow down and enjoy their food. They focused on preserving regional dishes, using high-quality ingredients, and supporting local farmers instead of large food companies.

Carlo Petrini was one of the strongest voices in this movement. He was not completely against modern convenience, but he criticized how the food industry separated people from the source of their food. In the fast food system, consumers rarely knew where their ingredients came from or who grew them. Petrini thought that people would appreciate their meals more if they understood the history behind the food, bought directly from producers, and took the time to cook with care.

The Slow Food movement quickly spread from Italy to other countries. It organized events to teach people about taste and where food comes from. However, in recent years, the movement has faced some challenges. Critics argue that "slow food" is often too expensive for ordinary families and that cooking fresh meals every day takes too much time. Despite these issues, the movement has successfully changed how many people think about healthy eating and the environment.`,
      questions: `### Original Questions

**(1) How did eating habits change in the late twentieth century?**
1. People started growing their own vegetables in their gardens more often.
2. Families began to spend more time cooking traditional meals together.
3. People began eating fast food because it was quick and cheap.
4. Restaurants stopped serving processed foods to improve health.

**(2) What was the main goal of the Slow Food movement started by Carlo Petrini?**
1. To help large food companies sell their products to other countries.
2. To protect traditional food cultures and encourage people to enjoy eating.
3. To invent new technologies that could cook food faster than before.
4. To open more fast food restaurants in Italy and across Europe.

**(3) Carlo Petrini believed that the modern food industry**
1. helped people connect with the farmers who grew their vegetables.
2. made it difficult for people to know where their food came from.
3. improved the quality of ingredients used in everyday cooking.
4. should be supported because it provided jobs for many people.

**(4) Why do some people criticize the Slow Food movement today?**
1. The food recommended by the movement costs too much money.
2. The movement forces people to become farmers against their will.
3. The dishes are too complicated for professional chefs to cook.
4. Eating fresh food is considered unhealthy by modern doctors.

**(5) Which of the following statements is true?**
1. The Slow Food movement began in the United States and moved to Italy.
2. Carlo Petrini wanted people to eat alone to save time.
3. Technology had little effect on how people ate in the twentieth century.
4. The movement has influenced people's views on healthy eating and the environment.

---
**Answer Key:** (1) 3, (2) 2, (3) 2, (4) 1, (5) 4`,
      translations: [
        { en: "In the late twentieth century, the way people ate began to change dramatically across the globe.", ja: "20世紀後半、人々の食事の仕方は世界中で劇的に変化し始めた。" },
        { en: "For centuries, meals were cooked at home using fresh ingredients grown on local farms.", ja: "何世紀もの間、食事は地元の農場で育てられた新鮮な食材を使って家庭で作られていた。" },
        { en: "Families would sit down together to eat and talk.", ja: "家族は一緒に座って食事をし、会話をしたものだった。" },
        { en: "However, as new technologies made life faster and busier, fast food restaurants became very popular.", ja: "しかし、新しい技術が生活をより速く、忙しくするにつれて、ファストフードレストランが非常に人気になった。" },
        { en: "These restaurants allowed people to buy cheap meals that were prepared in minutes.", ja: "これらのレストランによって、人々は数分で調理される安い食事を買うことができるようになった。" },
        { en: "While this was convenient, it meant that people started eating more processed foods and spent less time at the dinner table.", ja: "これは便利ではあったが、人々がより多くの加工食品を食べ始め、食卓で過ごす時間が減ることを意味した。" },
        { en: "Many people were worried about this shift in food culture.", ja: "多くの人々がこの食文化の変化を心配していた。" },
        { en: "In Italy, a man named Carlo Petrini believed that the rise of fast food was destroying traditional ways of life.", ja: "イタリアでは、カルロ・ペトリーニという男性が、ファストフードの台頭が伝統的な生活様式を破壊していると信じていた。" },
        { en: "In 1986, he founded the \"Slow Food\" movement to protect local food cultures and traditions.", ja: "1986年、彼は地元の食文化と伝統を守るために「スローフード」運動を設立した。" },
        { en: "The members of this group wanted to encourage people to slow down and enjoy their food.", ja: "このグループのメンバーは、人々にペースを落とし、食事を楽しむよう奨励したかった。" },
        { en: "They focused on preserving regional dishes, using high-quality ingredients, and supporting local farmers instead of large food companies.", ja: "彼らは、大手の食品会社ではなく地元の農家を支援し、郷土料理を保存し、高品質な食材を使うことに焦点を当てた。" },
        { en: "Carlo Petrini was one of the strongest voices in this movement.", ja: "カルロ・ペトリーニは、この運動の中で最も強力な発言者の一人だった。" },
        { en: "He was not completely against modern convenience, but he criticized how the food industry separated people from the source of their food.", ja: "彼は現代の利便性に完全に反対していたわけではなかったが、食品産業が人々を食の源から切り離している方法を批判した。" },
        { en: "In the fast food system, consumers rarely knew where their ingredients came from or who grew them.", ja: "ファストフードのシステムでは、消費者は食材がどこから来たのか、誰が育てたのかをほとんど知らなかった。" },
        { en: "Petrini thought that people would appreciate their meals more if they understood the history behind the food, bought directly from producers, and took the time to cook with care.", ja: "ペトリーニは、もし人々が食の背後にある歴史を理解し、生産者から直接購入し、時間をかけて丁寧に料理すれば、食事をもっと大切にするだろうと考えた。" },
        { en: "The Slow Food movement quickly spread from Italy to other countries.", ja: "スローフード運動は急速にイタリアから他の国々へと広がった。" },
        { en: "It organized events to teach people about taste and where food comes from.", ja: "それは、味覚や食べ物の由来について人々に教えるイベントを組織した。" },
        { en: "However, in recent years, the movement has faced some challenges.", ja: "しかし、近年、この運動はいくつかの課題に直面している。" },
        { en: "Critics argue that \"slow food\" is often too expensive for ordinary families and that cooking fresh meals every day takes too much time.", ja: "批評家たちは、「スローフード」は一般の家庭にとって高価すぎることが多く、毎日新鮮な食事を作るには時間がかかりすぎると主張している。" },
        { en: "Despite these issues, the movement has successfully changed how many people think about healthy eating and the environment.", ja: "これらの問題にもかかわらず、この運動は多くの人々が健康的な食事や環境について考える方法を変えることに成功した。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Arts and Crafts Movement (2024-1) - "Historical Social Movement"

### 1. 量的構造
- **総単語数:** ~330 words
- **パラグラフ構成:**
  1. **背景・変化 (Context):** 産業革命による手工業の衰退（過去問） vs ファストフードによる食文化の変化（オリジナル）。
  2. **運動の発生 (The Movement):** アーツ・アンド・クラフツ運動の設立（過去問） vs スローフード運動の設立（オリジナル）。
  3. **中心人物の思想 (Key Figure):** ウィリアム・モリスの労働観（過去問） vs カルロ・ペトリーニの生産者とのつながり（オリジナル）。
  4. **課題と影響 (Challenges & Legacy):** コスト高・時間不足による衰退（過去問） vs コスト高・手間による批判と現代への影響（オリジナル）。

### 2. 重要語彙
- **dramatically:** 劇的に
- **ingredient:** 食材
- **convenient:** 便利な
- **preserve:** 保存する
- **criticize:** 批判する
- **consumer:** 消費者
- **appreciate:** 感謝する、良さがわかる`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、食の産業化（ファストフード）への対抗運動としてイタリアで始まった「スローフード運動」についての説明文です。過去問の「アーツ・アンド・クラフツ運動（産業革命への対抗）」と同じ論理構造で展開されています。

### 1. The Change in Eating Habits (第1段落)
20世紀後半、技術の進歩により生活が忙しくなり、家庭での食事から便利で安いファストフードへと食習慣が変化した。これにより加工食品の摂取が増え、家族の団欒が減った。

### 2. The Slow Food Movement (第2段落)
この変化を懸念し、イタリアのカルロ・ペトリーニが1986年に「スローフード運動」を創設。地域の伝統料理を守り、地元の農家を支援することを目指した。

### 3. Connection to Source (第3段落)
ペトリーニは、現代の食品産業が消費者と生産者を切り離していると批判した。彼は、消費者が食材の背景を知り、生産者から直接買うことで、食事の価値を再認識できると考えた。

### 4. Challenges and Legacy (第4段落)
運動は世界に広がったが、「高価すぎる」「時間がかかりすぎる」という批判もある。しかし、健康や環境に対する人々の意識を変えるという点では成功を収めている。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Arts and Crafts (過去問) | Slow Food (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 産業革命 vs 手仕事 | ファストフード vs スローフード | 効率化・産業化への反発と「質」への回帰 |
| **構造** | 変化(工場化) → 運動設立 → モリスの思想 → 衰退と影響 | 変化(即席化) → 運動設立 → ペトリーニの思想 → 批判と影響 | 4段落構成、歴史的背景→運動→リーダー→評価 |
| **設問1** | 19世紀の生活変化 (Farms -> Factories) | 20世紀の食の変化 (Home -> Fast food) | 第1段落の「社会的変化」を問う |
| **設問2** | 運動の信念 (Return to handmade) | 運動の目的 (Protect tradition) | 第2段落の「運動の理念」を問う |
| **設問3** | モリスの工場批判 (Process division) | ペトリーニの産業批判 (Separation) | 第3段落の「リーダーの具体的批判」を問う |
| **設問4** | 衰退の理由 (Cost/Time) | 批判の理由 (Cost/Time) | 第4段落の「ネガティブな側面」を問う |
| **設問5** | 全体の真偽 (Tech affected society) | 全体の真偽 (Movement influenced views) | 本文全体の要旨・影響 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Arts and Crafts (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> モノづくり（プロダクトデザイン）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 労働者の喜びと製品の美しさ。

* **Slow Food (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 食文化（ライフスタイル）。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 消費者の意識と生産者とのつながり。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** "Left farms... started buying things made in factories."
    * **Original:** "Began eating fast food because it was quick and cheap." (利便性へのシフト)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** "Lives would improve if they returned to making things by hand."
    * **Original:** "Protect traditional food cultures and encourage people to enjoy eating." (伝統への回帰)
* **Q3 (内容一致 - Para 3):**
    * **過去問:** "Did not have enough involvement in the production process." (プロセスの分断)
    * **Original:** "Made it difficult for people to know where their food came from." (情報の分断)
* **Q4 (内容一致 - Para 4):**
    * **過去問:** "Products were expensive and not easily available."
    * **Original:** "Food recommended by the movement costs too much money." (コストの壁)
* **Q5 (True Statement):**
    * **過去問:** "Technology... had a significant effect on UK society."
    * **Original:** "The movement has influenced people's views on healthy eating..." (社会的影響)`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>However, as new technologies made life faster and busier, fast food restaurants became very popular.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞 (M):</b> However</li>
    <li><b>従属節 (as):</b> as [new technologies made life faster and busier] (原因)</li>
    <li><b>主語 (S):</b> fast food restaurants</li>
    <li><b>動詞 (V):</b> became</li>
    <li><b>補語 (C):</b> very popular</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"as"（～するにつれて/～なので）が理由を表しています。技術によって生活が忙しくなった結果、ファストフードが広まったという因果関係が、選択肢3の "because it was quick and cheap"（忙しい生活＝早くて安いものを求める）につながります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>In 1986, he founded the "Slow Food" movement to protect local food cultures and traditions.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> he (Carlo Petrini)</li>
    <li><b>動詞 (V):</b> founded</li>
    <li><b>目的語 (O):</b> the "Slow Food" movement</li>
    <li><b>不定詞 (副詞的用法):</b> to protect local food cultures and traditions</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>不定詞の副詞的用法 "to protect..." が設立の「目的」を表しています。これが選択肢2の "protect traditional food cultures" と完全に一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>...he criticized how the food industry separated people from the source of their food. / In the fast food system, consumers rarely knew where their ingredients came from...</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> he</li>
    <li><b>動詞 (V):</b> criticized</li>
    <li><b>目的語 (O):</b> how [the food industry separated people from the source...]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"separate A from B"（AをBから切り離す）という表現が重要です。人々を食の源から切り離す＝「どこから来たか分からなくさせる」ことであり、これが選択肢2の "made it difficult for people to know where their food came from" の根拠となります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>Critics argue that "slow food" is often too expensive for ordinary families...</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Critics</li>
    <li><b>動詞 (V):</b> argue</li>
    <li><b>目的語 (O):</b> that ["slow food" is often too expensive...]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"too expensive"（高すぎる）という明確な批判点が、選択肢1の "costs too much money" に言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall/Conclusion)</h3>
<blockquote>Despite these issues, the movement has successfully changed how many people think about healthy eating and the environment.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>譲歩 (M):</b> Despite these issues</li>
    <li><b>主語 (S):</b> the movement</li>
    <li><b>動詞 (V):</b> has successfully changed</li>
    <li><b>目的語 (O):</b> how [many people think about healthy eating and the environment]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"change how people think"（人々の考え方を変える）＝ "influence people's views"（人々の見方に影響を与える）です。文末の結論部分が、選択肢4の正解根拠となります。</p>
</div>`
    }
  },
  "2025-2": {
    past: {
      title: "The Mirror Test",
      content: `## Title: The Mirror Test

Humans and animals are different in many ways. Some say only humans can have a language and a culture. Among these discussions, one idea that is often discussed is whether only humans can recognize or tell the difference between themselves and others. The mirror test is used to judge this. It is done by putting a mark on an animal's body. The mark is put in a place where the animal cannot see without the help of a mirror. If the animal tries to remove the mark on its body, it shows that the animal recognizes itself.

The same test was done on fish called cleaner wrasses in a tank with a mirror. At first, they attacked their reflection. This could be because they thought the reflection was another fish. Later, they changed how they swam and checked if the fish in the mirror also changed how they swam. After they got used to the mirror, they were put to sleep, and a mark was put on them. When they woke up and looked in the mirror, many of them tried to take the mark off their body. They did so by brushing their body against the tank or the sand on the bottom.

They also recognized themselves in photographs. In a test done after the mirror test, researchers showed the fish some pictures. When they were shown a picture of themselves with a mark on their body, they tried to remove the mark from their body. However, they did not act the same way when pictures of other fish with a mark were shown. This suggests that they recognize differences between themselves and other fish.

The mirror test has led to much discussion and debate. First, animals that have not seen a mirror before might not understand that what is in the mirror is themselves. It does not suggest that they do not recognize themselves. Instead, it shows that they have no idea how a mirror works. Moreover, vision is not the main sense for all animals. Some animals rely more on smell than vision, so failing the mirror test does not always mean they cannot recognize themselves.`,
      questions: `### Questions

**(27) The mirror test is used**
1. to test an animal's ability to see in the dark.
2. to find out how far an animal can see outside.
3. to determine if an animal can recognize itself.
4. to see when a baby recognizes who its mother is.

**(28) How did the cleaner wrasses check if the fish in the mirror was themselves?**
1. They opened and closed their mouths many times.
2. They compared the color of their body to that of the mirrored fish.
3. They tried to touch the fish in the mirror with their fins.
4. They began to swim in a different way than before.

**(29) What behavior did the cleaner wrasses take when they were shown a picture of themselves with a mark?**
1. They tried to get rid of the mark on their body.
2. They escaped from the picture and hid behind a rock.
3. They ignored the picture and showed no interest in it.
4. They began swimming with other fish in the tank.

**(30) In the discussion about the mirror test, it has been pointed out that**
1. it costs a lot of money and takes too much time.
2. it is too dangerous to use a piece of glass in the water.
3. it only works on fish and some types of monkeys.
4. it needs to consider the other senses that animals have.

**(31) Which of the following statements is true?**
1. Some fish can understand the difference between themselves and others.
2. The cleaner wrasses were marked first and then placed in a tank with a mirror.
3. The cleaner wrasses did not notice the marks that were put on their bodies.
4. It was found that animals with large brains understood how to use mirrors.

---
**Answer Key:** (27) 3, (28) 4, (29) 1, (30) 4, (31) 1`,
      translations: [
        { en: "Humans and animals are different in many ways.", ja: "人間と動物は多くの点で異なっている。" },
        { en: "Some say only humans can have a language and a culture.", ja: "人間だけが言語や文化を持つことができると言う人もいる。" },
        { en: "Among these discussions, one idea that is often discussed is whether only humans can recognize or tell the difference between themselves and others.", ja: "これらの議論の中で、しばしば議論される一つの考えは、人間だけが自分自身と他者を認識し、違いを見分けることができるのかどうかということである。" },
        { en: "The mirror test is used to judge this.", ja: "ミラーテスト（鏡像認知テスト）はこれを判断するために用いられる。" },
        { en: "It is done by putting a mark on an animal's body.", ja: "それは動物の体に印をつけることによって行われる。" },
        { en: "The mark is put in a place where the animal cannot see without the help of a mirror.", ja: "その印は、鏡の助けなしでは動物が見ることができない場所に付けられる。" },
        { en: "If the animal tries to remove the mark on its body, it shows that the animal recognizes itself.", ja: "もしその動物が自分の体にある印を取り除こうとすれば、それはその動物が自分自身を認識していることを示している。" },
        { en: "The same test was done on fish called cleaner wrasses in a tank with a mirror.", ja: "同じテストが、鏡のある水槽の中にいるホンソメワケベラと呼ばれる魚に対して行われた。" },
        { en: "At first, they attacked their reflection.", ja: "最初、彼らは自分たちの反射像を攻撃した。" },
        { en: "This could be because they thought the reflection was another fish.", ja: "これは、彼らが反射像を別の魚だと思ったからかもしれない。" },
        { en: "Later, they changed how they swam and checked if the fish in the mirror also changed how they swam.", ja: "その後、彼らは泳ぎ方を変え、鏡の中の魚も泳ぎ方を変えるかどうかを確認した。" },
        { en: "After they got used to the mirror, they were put to sleep, and a mark was put on them.", ja: "彼らが鏡に慣れた後、彼らは眠らされ、体に印が付けられた。" },
        { en: "When they woke up and looked in the mirror, many of them tried to take the mark off their body.", ja: "彼らが目を覚まして鏡を見たとき、その多くが体から印を取り除こうとした。" },
        { en: "They did so by brushing their body against the tank or the sand on the bottom.", ja: "彼らは体を水槽や底の砂にこすりつけることによってそれを行った。" },
        { en: "They also recognized themselves in photographs.", ja: "彼らはまた、写真の中でも自分自身を認識した。" },
        { en: "In a test done after the mirror test, researchers showed the fish some pictures.", ja: "ミラーテストの後に行われたテストで、研究者は魚にいくつかの写真を見せた。" },
        { en: "When they were shown a picture of themselves with a mark on their body, they tried to remove the mark from their body.", ja: "体に印のついた自分自身の写真を見せられると、彼らは体から印を取り除こうとした。" },
        { en: "However, they did not act the same way when pictures of other fish with a mark were shown.", ja: "しかし、印のついた他の魚の写真が見せられたときには、彼らは同じようには振る舞わなかった。" },
        { en: "This suggests that they recognize differences between themselves and other fish.", ja: "これは、彼らが自分自身と他の魚との違いを認識していることを示唆している。" },
        { en: "The mirror test has led to much discussion and debate.", ja: "ミラーテストは多くの議論や論争を引き起こしてきた。" },
        { en: "First, animals that have not seen a mirror before might not understand that what is in the mirror is themselves.", ja: "第一に、これまでに鏡を見たことのない動物は、鏡に映っているのが自分自身であることを理解できないかもしれない。" },
        { en: "It does not suggest that they do not recognize themselves.", ja: "それは彼らが自分自身を認識していないことを示唆するものではない。" },
        { en: "Instead, it shows that they have no idea how a mirror works.", ja: "そうではなく、それは彼らが鏡がどのように機能するかを知らないということを示している。" },
        { en: "Moreover, vision is not the main sense for all animals.", ja: "さらに、視覚はすべての動物にとって主要な感覚というわけではない。" },
        { en: "Some animals rely more on smell than vision, so failing the mirror test does not always mean they cannot recognize themselves.", ja: "嗅覚に視覚以上に頼る動物もいるため、ミラーテストに失敗することが必ずしも彼らが自分自身を認識できないことを意味するわけではない。" }
      ]
    },
    original: {
      title: "Animal Self-Control",
      content: `## Title: Animal Self-Control

People often think about the future, but do animals do the same? One important sign of intelligence is self-control. This is the ability to wait for a better reward instead of taking a small one right away. In humans, this is often tested using the "marshmallow test" with children. Recently, researchers wanted to see if animals could also pass this kind of test. They used a special experiment to find out.

A study was done on cuttlefish to test their self-control. Cuttlefish are sea creatures related to squid. In the experiment, researchers offered the cuttlefish two types of food. One was a piece of king prawn, which the cuttlefish loved. The other was a piece of crab, which they liked less. The researchers taught the cuttlefish that if they did not eat the crab immediately, they would be given the prawn later. If they ate the crab, the prawn was taken away.

The results were surprising. The cuttlefish were able to wait for the prawn. They looked at the crab but did not attack it. They waited for up to two minutes to get the food they preferred. This behavior showed that cuttlefish could plan for the future. Before this, many scientists thought only animals like monkeys and crows could do this.

The study has changed how people view animal intelligence. However, some researchers point out that hunger levels can change the results. If an animal is very hungry, it might not wait, even if it has self-control. Therefore, checking an animal's physical condition is important before saying it is not smart. Self-control might be more common in the animal world than we thought.`,
      questions: `### Original Questions

**(1) What is the "marshmallow test" used to check?**
1. If a subject has the ability to wait for a better reward.
2. How fast an animal can find food in a hidden place.
3. Whether children prefer eating sweets or healthy food.
4. If animals can recognize their own reflection in a mirror.

**(2) In the experiment, what did the cuttlefish have to do to get the prawn?**
1. They had to catch the crab as fast as possible.
2. They had to move the crab to a different part of the tank.
3. They had to stop themselves from eating the crab.
4. They had to show that they liked the crab more than the prawn.

**(3) What did the cuttlefish do during the test?**
1. They ignored the crab to get the food they liked more.
2. They attacked the reflection of the prawn in the glass.
3. They ate the crab first and then waited for the prawn.
4. They tried to escape from the tank to find more food.

**(4) What has been pointed out about the test results?**
1. The test only works on animals that live in the sea.
2. Cuttlefish are not smart enough to understand the rules.
3. The type of food does not matter to the animals.
4. An animal's hunger can affect how it performs in the test.

**(5) Which of the following statements is true?**
1. The researchers found that cuttlefish prefer crab over king prawn.
2. Cuttlefish showed they have the ability to make plans for the future.
3. Scientists already knew that cuttlefish had the same intelligence as monkeys.
4. The cuttlefish ate the crab immediately because they were very hungry.

---
**Answer Key:** (1) 1, (2) 3, (3) 1, (4) 4, (5) 2`,
      translations: [
        { en: "People often think about the future, but do animals do the same?", ja: "人々はよく将来について考えるが、動物も同じことをするのだろうか？" },
        { en: "One important sign of intelligence is self-control.", ja: "知能の重要な兆候の一つは自制心である。" },
        { en: "This is the ability to wait for a better reward instead of taking a small one right away.", ja: "これは、すぐに小さな報酬を受け取る代わりに、より良い報酬を待つ能力のことである。" },
        { en: "In humans, this is often tested using the \"marshmallow test\" with children.", ja: "人間の場合、これは子供を対象とした「マシュマロテスト」を使ってしばしば試される。" },
        { en: "Recently, researchers wanted to see if animals could also pass this kind of test.", ja: "最近、研究者たちは動物もこの種のテストに合格できるかどうかを確認したいと考えた。" },
        { en: "They used a special experiment to find out.", ja: "彼らはそれを調べるために特別な実験を使用した。" },
        { en: "A study was done on cuttlefish to test their self-control.", ja: "コウイカの自制心をテストするためにある研究が行われた。" },
        { en: "Cuttlefish are sea creatures related to squid.", ja: "コウイカはイカに関連する海の生き物である。" },
        { en: "In the experiment, researchers offered the cuttlefish two types of food.", ja: "その実験で、研究者たちはコウイカに2種類の餌を提供した。" },
        { en: "One was a piece of king prawn, which the cuttlefish loved.", ja: "一つはクルマエビの一切れで、コウイカはそれが大好きだった。" },
        { en: "The other was a piece of crab, which they liked less.", ja: "もう一つはカニの一切れで、彼らはそれほど好きではなかった。" },
        { en: "The researchers taught the cuttlefish that if they did not eat the crab immediately, they would be given the prawn later.", ja: "研究者たちはコウイカに、もしすぐにカニを食べなければ、後でエビがもらえると教えた。" },
        { en: "If they ate the crab, the prawn was taken away.", ja: "もし彼らがカニを食べたら、エビは取り上げられた。" },
        { en: "The results were surprising.", ja: "結果は驚くべきものだった。" },
        { en: "The cuttlefish were able to wait for the prawn.", ja: "コウイカはエビを待つことができた。" },
        { en: "They looked at the crab but did not attack it.", ja: "彼らはカニを見たが、攻撃はしなかった。" },
        { en: "They waited for up to two minutes to get the food they preferred.", ja: "彼らは好みの餌を手に入れるために最大2分間待った。" },
        { en: "This behavior showed that cuttlefish could plan for the future.", ja: "この行動は、コウイカが将来の計画を立てられることを示した。" },
        { en: "Before this, many scientists thought only animals like monkeys and crows could do this.", ja: "これ以前、多くの科学者はサルやカラスのような動物だけがこれができると考えていた。" },
        { en: "The study has changed how people view animal intelligence.", ja: "この研究は、人々の動物の知能に対する見方を変えた。" },
        { en: "However, some researchers point out that hunger levels can change the results.", ja: "しかし、一部の研究者は、空腹のレベルが結果を変える可能性があると指摘している。" },
        { en: "If an animal is very hungry, it might not wait, even if it has self-control.", ja: "もし動物が非常に空腹であれば、たとえ自制心があったとしても待たないかもしれない。" },
        { en: "Therefore, checking an animal's physical condition is important before saying it is not smart.", ja: "したがって、動物が賢くないと言う前に、その身体状態を確認することが重要である。" },
        { en: "Self-control might be more common in the animal world than we thought.", ja: "自制心は、私たちが考えていたよりも動物界で一般的であるかもしれない。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** The Mirror Test (Animal Self-Recognition)

### 1. 量的構造
- **総単語数:** ~330 words
- **パラグラフ構成:**
  1. **導入:** 人間と動物の知能比較、特定のテスト（マシュマロテスト）の定義。
  2. **実験内容:** 特定の動物（コウイカ）を用いた実験手順。2つの選択肢（即時の報酬 vs 遅延報酬）の提示。
  3. **実験結果:** 動物が我慢してより良い報酬を得た行動。これが示す知能（計画性）。
  4. **考察・議論:** 結果に対する批判的視点や条件（空腹度）の影響、および結論。

### 2. 重要語彙
- **self-control:** 自制心
- **reward:** 報酬
- **experiment:** 実験
- **immediately:** すぐに
- **prefer:** ～を好む
- **behavior:** 行動
- **intelligence:** 知能`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、動物の知能、特に「自制心（将来のために我慢する能力）」に関する実験についての説明です。コウイカを用いた実験を通して、無脊椎動物でも将来を見越した計画的な行動がとれる可能性を示唆しつつ、その結果を評価する際の注意点にも触れています。

### 1. Animal Self-Control (第1段落)
人間には将来を考えて行動する自制心（マシュマロテストで測られるような能力）があるが、動物にも同様の能力があるかを調べるため、研究者たちは特別な実験を行った。

### 2. The Experiment on Cuttlefish (第2段落)
コウイカ（イカの仲間）に対し、大好物のエビと、それほどでもないカニを提示する実験を行った。「すぐにカニを食べなければ、後でエビがもらえる」というルールを学習させた。

### 3. The Results (第3段落)
驚くべきことに、コウイカはカニを無視して最大2分間待ち、より好みのエビを手に入れた。これは、サルやカラスだけでなく、コウイカも将来の計画を立てられることを示している。

### 4. Discussion (第4段落)
この研究は動物の知能に対する見方を変えたが、空腹レベルなどの身体的条件が結果に影響を与える可能性も指摘されている。テストに失敗しても、単に賢くないわけではない可能性がある。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | The Mirror Test (過去問) | Animal Self-Control (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 動物の自己認識（鏡） | 動物の自制心（マシュマロテスト） | 動物の知能実験とその解釈 |
| **構造** | 定義 → 実験(魚) → 追加実験(写真) → 議論/限界 | 定義 → 実験(イカ) → 結果の詳細 → 議論/限界 | 4段落構成、科学的実験の記述 |
| **設問1** | テストの目的・定義 | テストの目的・定義 | 第1段落の定義を問う |
| **設問2** | 実験中の具体的な確認行動 | 実験のルール/条件 | 第2段落の実験プロセスを問う |
| **設問3** | 追加実験（写真）への反応 | 実験結果（待機行動） | 第3段落の観察結果を問う |
| **設問4** | テストへの批判・指摘事項 | テスト結果への指摘事項 | 第4段落の限界・条件付けを問う |
| **設問5** | 全体の結論（True/False） | 全体の結論（True/False） | 本文全体の理解と結論の整合性 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **The Mirror Test (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 鏡を使った自己認識（視覚的認知）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> ホンソメワケベラが鏡や写真の自分を認識できるか。

* **Animal Self-Control (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 報酬を待つ自制心（時間的認知）。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> コウイカが好物のために我慢できるか（マシュマロテストの動物版）。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** "The mirror test is used..." (テストの目的)
    * **Original:** "What is the marshmallow test used to check?" (テストの目的)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** "How did the cleaner wrasses check...?" (行動の変化・確認方法)
    * **Original:** "...what did the cuttlefish have to do...?" (実験の条件・行動)
* **Q3 (内容一致 - Para 3):**
    * **過去問:** 写真を見せた時の反応 (removed the mark)。
    * **Original:** テスト中の実際の行動 (ignored the crab)。
* **Q4 (内容一致 - Para 4):**
    * **過去問:** 議論点 (consider other senses)。
    * **Original:** 議論点 (hunger levels effect)。
* **Q5 (内容一致 - Conclusion):**
    * **過去問:** 魚も他者との違いがわかる (True statement)。
    * **Original:** コウイカも計画性がある (True statement)。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1): Definition of Self-Control (自制心の定義)</h3>

<blockquote>This <b>is</b> the ability to wait for a better reward instead of taking a small one right away.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> This (Self-control)</li>
    <li><b>Verb (動詞):</b> is</li>
    <li><b>Complement (補語):</b> the ability [to wait for a better reward...]</li>
    <li><b>Modifier (修飾語):</b> instead of taking a small one right away (前置詞句)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>不定詞の形容詞的用法 "to wait..." が "ability" を修飾しています。「より良い報酬を待つ能力」という定義が、選択肢1の「より良い報酬を待つ能力があるか」と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2): Experiment Condition (実験の条件)</h3>

<blockquote>The researchers <b>taught</b> the cuttlefish that if they did not eat the crab immediately, they would be given the prawn later.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> The researchers</li>
    <li><b>Verb (動詞):</b> taught</li>
    <li><b>Object 1 (目的語1):</b> the cuttlefish</li>
    <li><b>Object 2 (目的語2):</b> that [if they did not eat... they would be given...] (接続詞that節)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"teach O1 O2" （O1にO2を教える）の第4文型です。that節の中の条件 "if they did not eat the crab immediately"（すぐにカニを食べなければ）が、エビを得るための条件となっており、これが選択肢3の「カニを食べるのを我慢しなければならなかった」に言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3): Resulting Behavior (結果としての行動)</h3>

<blockquote>They <b>looked at</b> the crab but <b>did not attack</b> it. / They <b>waited</b> for up to two minutes to get the food they preferred.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> They (The cuttlefish)</li>
    <li><b>Verb (動詞):</b> looked at / did not attack</li>
    <li><b>Object (目的語):</b> the crab / it</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>等位接続詞 "but" が「カニを見た」と「攻撃しなかった（＝食べなかった）」をつないでいます。この行動が、選択肢1の「好みの餌を得るためにカニを無視した」という記述と合致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4): Critical Point (指摘事項)</h3>

<blockquote>However, some researchers <b>point out</b> that hunger levels can change the results.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> some researchers</li>
    <li><b>Verb (動詞):</b> point out</li>
    <li><b>Object (目的語):</b> that [hunger levels can change the results]</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"point out that..."（～と指摘する）という表現が重要です。that節内の主語 "hunger levels"（空腹レベル）が結果を変えうるという内容が、選択肢4の "An animal's hunger can affect..." に対応しています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Conclusion): Final Conclusion (結論)</h3>

<blockquote>This behavior <b>showed</b> that cuttlefish could plan for the future.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> This behavior</li>
    <li><b>Verb (動詞):</b> showed</li>
    <li><b>Object (目的語):</b> that [cuttlefish could plan for the future]</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>第3段落の結論部分です。"plan for the future"（将来の計画を立てる）という表現が、コウイカの能力として示されており、これが選択肢2の正解の直接的な根拠となります。</p>
</div>`
    }
  },
  "2025-1": {
    past: {
      title: "History of Tea Bags",
      content: `## History of Tea Bags

At the start of the 1900s, Thomas Sullivan, a tea importer from New York, accidentally invented tea bags. He delivered tea leaf samples to his customers in small silk bags. He believed that they would take the leaves out of the bags before use. To his surprise, the customers thought it would be more convenient to pour hot water over the tea leaves while they were still in the bag. His invention had the advantage of making it easier to make a cup of tea, as well as making the process of cleaning the pot easier.

Tea bag materials have changed over time. Sullivan's first silk bags were replaced with cotton after his customers complained that silk bags were not the best for making tea. As the popularity of tea bags grew, it became impossible for tea bags made by hand to meet the demand. That was why filter paper was introduced. It was cheap and allowed water to pass through while keeping tea leaves inside. It was ideal for large-volume production. Today, in addition to filter paper, nylon tea bags are also common in the market.

The spread of tea bags was first observed in the United States and Canada. It took a while, however, for them to gain popularity in Britain. Using tea bags was considered rude in their culture among some people. This attitude began to change after World War II when people's lives became busier. In busy lifestyles, their traditional method of using tea leaves that were not in bags became difficult. Tea bags were suitable for the modern, fast-paced life.

Tea bags continue to improve. In the late 1990s, pyramid-shaped tea bags appeared on the market. The shape offers more space for tea leaves to move freely compared to square tea bags. At the same time, there is a movement to go back to using paper, cloth, or silk instead of nylons or materials that include some plastic. This goes with the global trend toward reducing plastic use. These efforts aim to make tea bags, which are usually thrown away after one use, more environmentally friendly.`,
      questions: `### Questions

**(27) Why was Thomas Sullivan surprised at his customers?**
1. They sent the tea samples back to him without opening them.
2. They asked for bigger bags to make it easier to make tea.
3. They used the tea leaves in the bags just as they were delivered.
4. They mixed different types of tea from different bags together.

**(28) The development of tea bag materials was mainly influenced by**
1. the need for a large amount of production of tea bags.
2. the desire to improve the taste of tea by using filters.
3. the demand for handmade bags over machine-made ones.
4. the popularity of smaller bags for easy transportation.

**(29) Why did tea bags finally become popular in Britain?**
1. The quality of tea in bags improved to match the British tea culture.
2. British tea companies said it was not rude to use tea bags.
3. The government provided financial support to tea bag factories.
4. They fit well with the pace of the modern life of British people.

**(30) Pyramid-shaped tea bags were introduced to**
1. reduce the amount of tea leaves used and cut production costs.
2. make tea bags look more modern and appealing to customers.
3. give more space for tea leaves to move around in tea bags.
4. compete with a traditional tea-making method in the market.

**(31) Which of the following statements is true?**
1. The filter paper was the first material used to make tea bags.
2. The materials used for tea bags are becoming more eco-friendly.
3. It was Sullivan's customers' idea to put tea leaves in the silk bags.
4. People in Britain never used tea bags until very recently.

---
**Answer Key:** (27) 3, (28) 1, (29) 4, (30) 3, (31) 2`,
      translations: [
        { en: "At the start of the 1900s, Thomas Sullivan, a tea importer from New York, accidentally invented tea bags.", ja: "1900年代初頭、ニューヨークの茶の輸入業者であるトーマス・サリヴァンは、偶然ティーバッグを発明した。" },
        { en: "He delivered tea leaf samples to his customers in small silk bags.", ja: "彼は顧客に茶葉のサンプルを小さな絹の袋に入れて届けた。" },
        { en: "He believed that they would take the leaves out of the bags before use.", ja: "彼は、彼らが使用前に袋から茶葉を取り出すだろうと考えていた。" },
        { en: "To his surprise, the customers thought it would be more convenient to pour hot water over the tea leaves while they were still in the bag.", ja: "驚いたことに、顧客たちは茶葉が袋に入ったままの状態で熱湯を注ぐ方が便利だと考えた。" },
        { en: "His invention had the advantage of making it easier to make a cup of tea, as well as making the process of cleaning the pot easier.", ja: "彼の発明には、ポットを洗う工程を簡単にするだけでなく、一杯のお茶を淹れるのを簡単にするという利点があった。" },
        { en: "Tea bag materials have changed over time.", ja: "ティーバッグの素材は時とともに変化してきた。" },
        { en: "Sullivan's first silk bags were replaced with cotton after his customers complained that silk bags were not the best for making tea.", ja: "サリヴァンの最初の絹の袋は、絹の袋はお茶を淹れるのに最適ではないと顧客が不満を言った後、綿に取って代わられた。" },
        { en: "As the popularity of tea bags grew, it became impossible for tea bags made by hand to meet the demand.", ja: "ティーバッグの人気が高まるにつれて、手作りのティーバッグでは需要を満たすことが不可能になった。" },
        { en: "That was why filter paper was introduced.", ja: "それがろ紙（フィルターペーパー）が導入された理由だった。" },
        { en: "It was cheap and allowed water to pass through while keeping tea leaves inside.", ja: "それは安価で、茶葉を内部に保ちながら水を通すことができた。" },
        { en: "It was ideal for large-volume production.", ja: "それは大量生産に理想的だった。" },
        { en: "Today, in addition to filter paper, nylon tea bags are also common in the market.", ja: "今日では、ろ紙に加えて、ナイロン製のティーバッグも市場で一般的である。" },
        { en: "The spread of tea bags was first observed in the United States and Canada.", ja: "ティーバッグの普及は最初にアメリカとカナダで見られた。" },
        { en: "It took a while, however, for them to gain popularity in Britain.", ja: "しかしながら、それらがイギリスで人気を得るまでには時間がかかった。" },
        { en: "Using tea bags was considered rude in their culture among some people.", ja: "ティーバッグを使うことは、一部の人々の間で彼らの文化において無作法だと考えられていた。" },
        { en: "This attitude began to change after World War II when people's lives became busier.", ja: "この態度は、人々の生活がより忙しくなった第二次世界大戦後に変わり始めた。" },
        { en: "In busy lifestyles, their traditional method of using tea leaves that were not in bags became difficult.", ja: "忙しいライフスタイルの中で、袋に入っていない茶葉を使う彼らの伝統的な方法は難しくなった。" },
        { en: "Tea bags were suitable for the modern, fast-paced life.", ja: "ティーバッグは現代のペースの速い生活に適していた。" },
        { en: "Tea bags continue to improve.", ja: "ティーバッグは改良され続けている。" },
        { en: "In the late 1990s, pyramid-shaped tea bags appeared on the market.", ja: "1990年代後半、ピラミッド型のティーバッグが市場に登場した。" },
        { en: "The shape offers more space for tea leaves to move freely compared to square tea bags.", ja: "その形状は、四角いティーバッグに比べて茶葉が自由に動くためのより多くのスペースを提供する。" },
        { en: "At the same time, there is a movement to go back to using paper, cloth, or silk instead of nylons or materials that include some plastic.", ja: "同時に、ナイロンやプラスチックを含む素材の代わりに、紙、布、あるいは絹の使用に戻ろうとする動きがある。" },
        { en: "This goes with the global trend toward reducing plastic use.", ja: "これはプラスチックの使用を減らすという世界的な傾向と一致している。" },
        { en: "These efforts aim to make tea bags, which are usually thrown away after one use, more environmentally friendly.", ja: "これらの取り組みは、通常一度使ったら捨てられるティーバッグを、より環境に優しいものにすることを目指している。" }
      ]
    },
    original: {
      title: "History of Potato Chips",
      content: `## History of Potato Chips

In the summer of 1853, George Crum, a chef in New York, unintentionally created potato chips. One evening, a customer at his restaurant kept sending his fried potatoes back to the kitchen. The customer complained that they were too thick and soft. Annoyed by this, Crum sliced the potatoes as thinly as possible, fried them until they were hard, and put a lot of salt on them. To his surprise, the customer loved the crispy snack. They became a hit at the restaurant and were soon known as "Saratoga Chips."

For a long time, chips were only served in restaurants or sold in barrels. This caused a problem because the chips at the bottom of the barrel would often get crushed and go stale. In the 1920s, a businesswoman named Laura Scudder had an idea to solve this. She asked her workers to iron sheets of wax paper together to make bags. These bags kept the chips fresh and allowed them to be transported to stores. This invention helped potato chips become a mass-market product.

While potato chips were popular in the United States, they were usually sold without any flavor. A small packet of salt was sometimes included in the bag for customers to add themselves. This changed in the 1950s when the owner of an Irish company invented a new technology to add seasoning directly to the chips. He introduced the first flavored chips: Cheese and Onion. This innovation led to a global explosion of chip flavors that matched local food cultures.

Potato chips continue to evolve to meet modern needs. In recent years, concerns about health have led to changes in how chips are made. Companies now offer baked chips or chips made from vegetables other than potatoes to lower fat and calories. Also, there is a push for environmentally friendly packaging. Manufacturers are trying to develop bags that are biodegradable. These efforts aim to reduce the amount of plastic waste created by the snack industry.`,
      questions: `### Original Questions

**(1) Why was George Crum surprised by the customer's reaction?**
1. The customer asked for a refund after eating the potatoes.
2. The customer enjoyed the thin and hard potatoes he made.
3. The customer wanted to learn how to cook the potatoes.
4. The customer complained that the new potatoes were too salty.

**(2) What was the main benefit of Laura Scudder's invention?**
1. It allowed chips to be kept fresh and sold in stores.
2. It made it easier for workers to peel the potatoes.
3. It reduced the cost of frying the chips in oil.
4. It improved the taste of the chips by adding salt.

**(3) How did potato chips change in the 1950s?**
1. They began to be sold in barrels instead of paper bags.
2. The United States government banned the sale of flavored chips.
3. New technologies allowed flavors to be added to them.
4. Customers stopped buying them because of health concerns.

**(4) Why are companies introducing baked or vegetable chips?**
1. To use up old potatoes that cannot be sold.
2. To address customers' concerns about health.
3. To make the chips crispier than fried ones.
4. To reduce the cost of packaging materials.

**(5) Which of the following statements is true?**
1. George Crum intended to invent potato chips from the beginning.
2. Potato chips were originally sold with the seasoning already added.
3. Companies are looking for ways to make chip bags less harmful to the environment.
4. Laura Scudder's invention made chips go stale faster than before.

---
**Answer Key:** (1) 2, (2) 1, (3) 3, (4) 2, (5) 3`,
      translations: [
        { en: "In the summer of 1853, George Crum, a chef in New York, unintentionally created potato chips.", ja: "1853年の夏、ニューヨークのシェフであるジョージ・クラムは、意図せずポテトチップスを生み出した。" },
        { en: "One evening, a customer at his restaurant kept sending his fried potatoes back to the kitchen.", ja: "ある晩、彼のレストランの客が、フライドポテトを何度も厨房に送り返してきた。" },
        { en: "The customer complained that they were too thick and soft.", ja: "その客は、それらが厚すぎて柔らかすぎると文句を言った。" },
        { en: "Annoyed by this, Crum sliced the potatoes as thinly as possible, fried them until they were hard, and put a lot of salt on them.", ja: "これに腹を立てたクラムは、ジャガイモをできる限り薄くスライスし、硬くなるまで揚げ、大量の塩を振った。" },
        { en: "To his surprise, the customer loved the crispy snack.", ja: "驚いたことに、その客はこのパリパリしたスナックを気に入った。" },
        { en: "They became a hit at the restaurant and were soon known as \"Saratoga Chips.\"", ja: "それらはレストランで大ヒットし、すぐに「サラトガ・チップス」として知られるようになった。" },
        { en: "For a long time, chips were only served in restaurants or sold in barrels.", ja: "長い間、チップスはレストランで提供されるか、樽に入れて売られるだけだった。" },
        { en: "This caused a problem because the chips at the bottom of the barrel would often get crushed and go stale.", ja: "樽の底にあるチップスはしばしば砕けたり湿気ったりしてしまうため、これは問題を引き起こした。" },
        { en: "In the 1920s, a businesswoman named Laura Scudder had an idea to solve this.", ja: "1920年代、ローラ・スカダーという女性実業家がこれを解決するアイデアを持っていた。" },
        { en: "She asked her workers to iron sheets of wax paper together to make bags.", ja: "彼女は従業員に、ワックスペーパーのシートをアイロンで張り合わせて袋を作るように頼んだ。" },
        { en: "These bags kept the chips fresh and allowed them to be transported to stores.", ja: "これらの袋はチップスを新鮮に保ち、店へ輸送することを可能にした。" },
        { en: "This invention helped potato chips become a mass-market product.", ja: "この発明は、ポテトチップスが大量消費製品になるのを助けた。" },
        { en: "While potato chips were popular in the United States, they were usually sold without any flavor.", ja: "ポテトチップスはアメリカで人気があったが、通常は味付けなしで売られていた。" },
        { en: "A small packet of salt was sometimes included in the bag for customers to add themselves.", ja: "客が自分で加えるための塩の小袋が袋の中に含まれていることもあった。" },
        { en: "This changed in the 1950s when the owner of an Irish company invented a new technology to add seasoning directly to the chips.", ja: "これは1950年代に、アイルランドの会社のオーナーがチップスに直接調味料を加える新しい技術を発明したことで変わった。" },
        { en: "He introduced the first flavored chips: Cheese and Onion.", ja: "彼は最初の味付きチップスである「チーズ＆オニオン」を導入した。" },
        { en: "This innovation led to a global explosion of chip flavors that matched local food cultures.", ja: "この革新は、地元の食文化に合ったチップスのフレーバーの世界的な爆発的増加につながった。" },
        { en: "Potato chips continue to evolve to meet modern needs.", ja: "ポテトチップスは現代のニーズを満たすために進化し続けている。" },
        { en: "In recent years, concerns about health have led to changes in how chips are made.", ja: "近年、健康への懸念がチップスの製造方法の変化につながっている。" },
        { en: "Companies now offer baked chips or chips made from vegetables other than potatoes to lower fat and calories.", ja: "企業は現在、脂肪やカロリーを下げるために、ベイクド（焼き）チップスやジャガイモ以外の野菜で作られたチップスを提供している。" },
        { en: "Also, there is a push for environmentally friendly packaging.", ja: "また、環境に優しいパッケージへの後押しもある。" },
        { en: "Manufacturers are trying to develop bags that are biodegradable.", ja: "製造業者は、生分解性の袋を開発しようとしている。" },
        { en: "These efforts aim to reduce the amount of plastic waste created by the snack industry.", ja: "これらの取り組みは、スナック業界によって生み出されるプラスチック廃棄物の量を減らすことを目的としている。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)
**ターゲットモデル:** History of Tea Bags

### 1. 量的構造
- **総単語数:** ~300 words
- **パラグラフ構成:**
  1. **発明の起源:** 意図せぬ発明（偶然の産物）と、当初の予想と異なるポジティブな反応。
  2. **改良と普及:** 保存・輸送のための容器（パッケージ）の進化（樽→袋）。
  3. **展開と革新:** 世界的普及と製品自体の進化（味付け技術の革新）。
  4. **現代の傾向:** 健康志向と環境配慮（エコフレンドリー）。

### 2. 重要語彙
- **unintentionally:** 意図せずに (accidentallyの類語)
- **complain:** 文句を言う
- **stale:** （食べ物が）新鮮でない、湿気た
- **seal:** 密封する
- **innovation:** 革新
- **criticize:** 批判する
- **environmentally friendly:** 環境に優しい

---`,
      summary: `## 講師用：本文要約 (Instructor Summary)
本文は、ポテトチップスの歴史について述べています。偶然の発明から始まり、パッケージの改良による流通革命、味付け技術の進歩を経て、現代の健康・環境志向への適応までを解説しています。

### 1. The Invention (第1段落)
1853年、ニューヨークのシェフ、ジョージ・クラムが、分厚いと文句を言う客への「仕返し」として極薄のポテトを揚げたところ、逆に大好評となり、ポテトチップスが誕生しました。

### 2. Packaging Evolution (第2段落)
当初はレストランのみでしたが、持ち帰りの需要が増えました。しかし、樽や瓶では湿気たり割れたりしました。ローラ・スカダーがワックスペーパーの袋を考案し、鮮度保持と輸送を可能にしました。

### 3. Flavor Innovation (第3段落)
世界に広がるにつれ、味も進化しました。かつては塩の小袋が同梱されていただけでしたが、1950年代に製造工程で直接味付けする技術が開発され、多様なフレーバーが登場しました。

### 4. Modern Trends (第4段落)
現在は健康志向（ノンフライや野菜チップス）や、環境配慮（リサイクル可能なパッケージ）への取り組みが進んでいます。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)
| 項目 | History of Tea Bags (過去問) | History of Potato Chips (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | ティーバッグの歴史 | ポテトチップスの歴史 | 身近な飲食物の「偶然の発明」と進化の歴史 |
| **構造** | 発明→素材変化→英国への普及→現代（エコ） | 発明→包装変化→味の進化→現代（エコ・健康） | 時系列に沿った発展と、技術的・文化的背景の説明 |
| **設問1** | 発明時の驚き（使用法の誤解） | 発明時の驚き（客の反応） | 発明者の意図と結果のギャップを問う |
| **設問2** | 素材変更の理由（大量生産） | 包装変更の理由（鮮度・輸送） | 技術的改良の目的・原因を問う |
| **設問3** | 英国普及の理由（生活様式） | 味付け技術の革新（技術革新） | 普及の転換点となった出来事を問う |
| **設問4** | 形状変更とエコ（現代） | 健康・エコ対応（現代） | 現代のトレンド（環境配慮）に関する理解を問う |
| **設問5** | 環境への配慮 (True statement) (False?) | 環境への配慮 (True statement) | 現代のトレンド（環境配慮）に関する理解を問う |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **History of Tea Bags (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 紅茶の入れ方の革命（道具の進化）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> 素材の変遷（絹→紙→ナイロン）と、英国という特定地域での受容の遅れに焦点。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「利便性（Convenience）」と「文化（Culture）」の対立と融合。

* **History of Potato Chips (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> スナック菓子の誕生と流通革命。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Development</span> パッケージ技術（保存性）とフレーバー技術の進化に焦点。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「保存技術（Preservation）」と「多様化（Variety）」による市場拡大。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** なぜ驚いたか？（顧客が袋を開けずに使ったから）
    * **Original:** なぜ驚いたか？（嫌がらせのつもりが喜ばれたから）
* **Q2 (内容一致 - Para 2):**
    * **過去問:** 素材変化の主因（手作りでは需要に追いつかない＝大量生産）。
    * **Original:** 包装変化の主因（樽では湿気る・割れる＝品質保持）。
* **Q3 (内容一致 - Para 3):**
    * **過去問:** 英国での普及理由（忙しい現代生活への適合）。
    * **Original:** 1950年代の大きな変化（製造時の味付け技術の確立）。
* **Q4 (内容一致 - Para 4):**
    * **過去問:** ピラミッド型の導入理由（茶葉の動き）。※選択肢にエコへの言及あり
    * **Original:** 現代の変化（環境配慮パッケージ）。※過去問の(31)に相当する包括的な設問として設計。
* **Q5 (Conclusion):**
    * **過去問:** Eco-friendly materials (True).
    * **Original:** Eco-friendly packaging (True).`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1): Definition of Unexpected Success (予想外の成功)</h3>

<blockquote>To his surprise, the customer <b>loved</b> the crispy snack.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Modifier (修飾語):</b> To his surprise (彼が驚いたことに)</li>
    <li><b>Main Subject (主語):</b> the customer</li>
    <li><b>Verb (動詞):</b> loved</li>
    <li><b>Object (目的語):</b> the crispy snack</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"To one's surprise" は感情を表す重要なイディオムです。客が怒ると思って出したものが「気に入られた（loved）」という予想外の結果が、選択肢2の正解根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2): Purpose of Invention (発明の目的)</h3>

<blockquote>These bags <b>kept</b> the chips fresh and <b>allowed</b> them to be transported to stores.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> These bags</li>
    <li><b>Verb (動詞):</b> kept / allowed</li>
    <li><b>Object (目的語):</b> the chips / them</li>
    <li><b>Complement (補語):</b> fresh (kept O C)</li>
    <li><b>Infinitive (不定詞):</b> to be transported (allowed O to do)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"keep O C"（OをCの状態に保つ）と "allow O to do"（Oが～することを可能にする）の2つの重要構文が含まれています。「新鮮に保つ」「店へ輸送できる」という2点が、選択肢1の内容と完全に一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3): Turning Point (転換点)</h3>

<blockquote>This <b>changed</b> in the 1950s when the owner of an Irish company <b>invented</b> a new technology to add seasoning directly to the chips.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> This (前の文の内容＝味なしだったこと)</li>
    <li><b>Verb (動詞):</b> changed</li>
    <li><b>Modifier (修飾語):</b> in the 1950s</li>
    <li><b>Relative Adverb Clause (関係副詞節):</b> when [the owner... invented a new technology...]</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"technology to add seasoning"（味付けを加える技術）の発明が、1950年代の変化の中心です。これが選択肢3の "New technologies allowed flavors to be added" に言い換えられています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4): Purpose of New Types (新しいタイプの目的)</h3>

<blockquote>Companies now <b>offer</b> baked chips or chips made from vegetables other than potatoes to lower fat and calories.</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> Companies</li>
    <li><b>Verb (動詞):</b> offer</li>
    <li><b>Object (目的語):</b> baked chips or chips made from vegetables...</li>
    <li><b>Infinitive (不定詞):</b> to lower fat and calories (副詞的用法)</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>不定詞 "to lower fat and calories" が目的（～するために）を表しています。脂肪やカロリーを下げることは、すなわち選択肢2の "address customers' concerns about health"（健康への懸念に対処する）ことです。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Conclusion): Environmental Efforts (環境への取り組み)</h3>

<blockquote>Manufacturers <b>are trying to develop</b> bags that are biodegradable. / These efforts <b>aim</b> to reduce the amount of plastic waste...</blockquote>

<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>Main Subject (主語):</b> Manufacturers</li>
    <li><b>Verb (動詞):</b> are trying to develop</li>
    <li><b>Object (目的語):</b> bags</li>
    <li><b>Relative Clause (関係代名詞節):</b> that are biodegradable</li>
  </ul>
</div>

<div class="syntax-box syntax-box-point">
  <p>"biodegradable"（生分解性の＝自然に還る）という単語が、選択肢3の "less harmful to the environment"（環境に害が少ない）の根拠となります。文脈全体として環境配慮への動き（push for environmentally friendly packaging）を読み取ることが重要です。</p>
</div>`
    }
  },
  "2024-3": {
    past: {
      title: "Diaries",
      content: `## Title: Diaries

Although different people write diaries for different reasons, most people have probably tried writing one at least once in their lives. One of the common reasons why people keep a diary is to to reduce stress. By writing down ideas and thoughts that they do not want others to hear or know, they can calm down some emotions. Writing down what they have done, especially during important events such as vacations, is also a common means to organize their memories.

Morris Villarroel, a Spanish scientist and professor, started trying to organize his memories. When Villarroel turned forty, he was not sure what he had done by then. Even though he had some photos and journals, they were not enough to explain his forty years. To make sure he knows what he has accomplished when he turns eighty, he decided to keep a diary. However, his idea of keeping a diary was unique. He started to write down what he was doing and how he was feeling every fifteen to thirty minutes.

His effort to record what he had done did not end there. Soon after, he started taking pictures to document his life. He attached a small camera to his shirt and set it to take a photo around him automatically every thirty seconds. The number of photos he took in a day ranged from one thousand to two thousand. Of course, most of the photos were of boring everyday things like his hand, his computer, his food, and just people walking in front of him.

However, he learned several things from this experience. By checking what he had written, he found some patterns. This allowed him to realize that he often felt stressed while driving to work. Therefore, he has decided to take the train and walk. He also noticed a few things, so he improved his lectures. These things were so minor that he could have forgotten without the diary. With a detailed record of his life, he can now remember his life clearly, and he says that the last ten years felt much longer than the ones before.`,
      questions: `### Questions

**(27) What is one of the common reasons people keep diaries?**
1. To keep their thoughts organized.
2. To let others know about some important events.
3. To show them to someone they love.
4. To read them when they feel stressed.

**(28) How did Morris Villarroel feel when he turned forty?**
1. His work and pets kept him too busy.
2. His pictures and papers did not show enough of his past.
3. He always failed to keep a diary.
4. He was not ready to keep writing his journals as a scientist.

**(29) In his effort to keep a diary, Villarroel**
1. realized that his life was full of small things that were not worth remembering.
2. took photos of himself when an important thing was happening.
3. began to record every detail of his life by using a camera.
4. made sure to take pictures of every person he met every day.

**(30) What did Villarroel discover through the experience of keeping a diary?**
1. Sometimes, it is necessary to stop keeping a diary and enjoy the moment.
2. He can feel as if time passes more slowly by keeping a detailed record.
3. His memory has gotten much worse compared to before he started a diary.
4. Bigger life events create more emotions and feelings than smaller ones.

**(31) Which of the following statements is true?**
1. The purpose of keeping a diary for Villarroel was to improve his lectures.
2. It is more important to write down how people are feeling than what they are doing.
3. Villarroel found that his diary increased the quality of his life.
4. Villarroel shows that taking pictures and writing down events have different purposes.

**Answer Key:** (27) 1, (28) 2, (29) 3, (30) 2, (31) 3`,
      translations: [
        { en: "Although different people write diaries for different reasons, most people have probably tried writing one at least once in their lives.", ja: "人々はさまざまな理由で日記を書くが、ほとんどの人は人生で少なくとも一度は日記を書こうとしたことがあるだろう。" },
        { en: "One of the common reasons why people keep a diary is to reduce stress.", ja: "人々が日記をつける一般的な理由の一つは、ストレスを軽減することである。" },
        { en: "By writing down ideas and thoughts that they do not want others to hear or know, they can calm down some emotions.", ja: "他人に聞かれたり知られたりしたくないアイデアや考えを書き留めることによって、彼らはいくつかの感情を落ち着かせることができる。" },
        { en: "Writing down what they have done, especially during important events such as vacations, is also a common means to organize their memories.", ja: "特に休暇などの重要なイベント中に、自分がしたことを書き留めることも、記憶を整理するための一般的な手段である。" },
        { en: "Morris Villarroel, a Spanish scientist and professor, started trying to organize his memories.", ja: "スペインの科学者であり教授であるモリス・ヴィラロエルは、自分の記憶を整理しようとし始めた。" },
        { en: "When Villarroel turned forty, he was not sure what he had done by then.", ja: "ヴィラロエルは40歳になったとき、それまでに自分が何をしてきたのか確信が持てなかった。" },
        { en: "Even though he had some photos and journals, they were not enough to explain his forty years.", ja: "彼はいくつかの写真や日誌を持っていたが、それらは彼の40年間を説明するには不十分だった。" },
        { en: "To make sure he knows what he has accomplished when he turns eighty, he decided to keep a diary.", ja: "80歳になったときに自分が何を成し遂げたかを知ることができるように、彼は日記をつけることに決めた。" },
        { en: "However, his idea of keeping a diary was unique.", ja: "しかし、彼の日記をつけるという考えはユニークなものだった。" },
        { en: "He started to write down what he was doing and how he was feeling every fifteen to thirty minutes.", ja: "彼は15分から30分ごとに、自分が何をしているか、どのように感じているかを書き留め始めた。" },
        { en: "His effort to record what he had done did not end there.", ja: "自分がしたことを記録するという彼の努力はそこで終わらなかった。" },
        { en: "Soon after, he started taking pictures to document his life.", ja: "その後すぐに、彼は自分の人生を記録するために写真を撮り始めた。" },
        { en: "He attached a small camera to his shirt and set it to take a photo around him automatically every thirty seconds.", ja: "彼はシャツに小さなカメラを取り付け、30秒ごとに自動的に周囲の写真を撮るように設定した。" },
        { en: "The number of photos he took in a day ranged from one thousand to two thousand.", ja: "彼が1日に撮る写真の数は、1,000枚から2,000枚に及んだ。" },
        { en: "Of course, most of the photos were of boring everyday things like his hand, his computer, his food, and just people walking in front of him.", ja: "もちろん、写真のほとんどは、彼の手、コンピュータ、食べ物、そしてただ目の前を歩いている人々のような、退屈な日常的なものだった。" },
        { en: "However, he learned several things from this experience.", ja: "しかし、彼はこの経験からいくつかのことを学んだ。" },
        { en: "By checking what he had written, he found some patterns.", ja: "書いたものを確認することで、彼はいくつかのパターンを発見した。" },
        { en: "This allowed him to realize that he often felt stressed while driving to work.", ja: "これにより、彼は車で通勤しているときにしばしばストレスを感じていることに気づくことができた。" },
        { en: "Therefore, he has decided to take the train and walk.", ja: "そのため、彼は電車を使って歩くことに決めた。" },
        { en: "He also noticed a few things, so he improved his lectures.", ja: "彼はまた、いくつかのことに気づき、講義を改善した。" },
        { en: "These things were so minor that he could have forgotten without the diary.", ja: "これらのことは非常に些細なことだったので、日記がなければ忘れてしまっていたかもしれない。" },
        { en: "With a detailed record of his life, he can now remember his life clearly, and he says that the last ten years felt much longer than the ones before.", ja: "人生の詳細な記録があることで、彼は今や自分の人生をはっきりと記憶することができ、過去10年間はその前の期間よりもずっと長く感じられたと彼は言っている。" }
      ]
    },
    original: {
      title: "The Sleep Project",
      content: `## Title: The Sleep Project

Everyone needs sleep to stay healthy, but many people struggle to get enough rest. There are various methods people use to improve their sleep quality, such as going to bed at the same time every night or avoiding caffeine. Recently, recording sleep patterns has become a common way to solve these problems. By collecting data on how they sleep, people hope to find the reasons why they feel tired during the day. It helps them organize their habits and understand their body better.

Elena Gomez, a software engineer, decided to take a serious look at her sleep habits. Despite sleeping for eight hours, she often woke up feeling exhausted. She had visited doctors, but they could not find any major health issues. To discover the real cause of her fatigue, she started a personal experiment. Unlike a simple sleep diary where people just write down the time they went to bed, Elena's approach was much more detailed. She decided to record everything about her environment and daily activities.

Elena used a smart watch to track her heart rate and movement during the night. In addition, she wrote down the room temperature, the food she ate for dinner, and even the amount of light in her room. She collected this data every single day for three months. Most of the information seemed useless at first. The records showed ordinary things like eating pasta for dinner or reading a book before bed, which did not seem to be related to her tiredness.

However, after analyzing the data, Elena found an important pattern. She realized that on the days she used her smartphone right before bed, her sleep quality was much lower. The blue light from the screen was affecting her brain. As a result, she decided to stop using electronic devices one hour before sleeping. This small change made a huge difference. She now wakes up feeling refreshed. She says that understanding her own data gave her control over her health, making her daily life more productive and enjoyable.`,
      questions: `### Original Questions

**(1) What is one reason why people record their sleep patterns?**
1. To prove to their doctors that they are sick.
2. To find out the cause of their tiredness.
3. To compare their sleep hours with their friends.
4. To reduce the time they spend sleeping.

**(2) Why did Elena Gomez start her experiment?**
1. She wanted to test a new smart watch for her work.
2. She was advised by her doctor to keep a simple diary.
3. She felt tired even though she slept for a long time.
4. She wanted to know how much caffeine she was drinking.

**(3) How was Elena's approach different from a simple sleep diary?**
1. She only recorded the time she woke up in the morning.
2. She tracked various details like room temperature and diet.
3. She took photos of herself while she was sleeping.
4. She asked her family members to watch her sleep.

**(4) What did Elena discover from her data?**
1. Eating pasta for dinner was bad for her sleep.
2. The room temperature was too high every night.
3. Using her smartphone before bed lowered her sleep quality.
4. Reading books made her brain too active to sleep.

**(5) Which of the following statements is true?**
1. Elena found that she needed to sleep more than eight hours.
2. Doctors found a major health issue before she started the test.
3. Elena's experiment helped her improve her daily life.
4. The smart watch data showed that she was not moving at night.

---
**Answer Key:** (1) 2, (2) 3, (3) 2, (4) 3, (5) 3`,
      translations: [
        { en: "Everyone needs sleep to stay healthy, but many people struggle to get enough rest.", ja: "誰もが健康を維持するために睡眠を必要とするが、多くの人が十分な休息をとるのに苦労している。" },
        { en: "There are various methods people use to improve their sleep quality, such as going to bed at the same time every night or avoiding caffeine.", ja: "毎晩同じ時間に寝たり、カフェインを避けたりするなど、睡眠の質を改善するために人々が使う方法はさまざまである。" },
        { en: "Recently, recording sleep patterns has become a common way to solve these problems.", ja: "最近では、睡眠パターンを記録することが、これらの問題を解決する一般的な方法になっている。" },
        { en: "By collecting data on how they sleep, people hope to find the reasons why they feel tired during the day.", ja: "どのように眠っているかのデータを集めることで、人々は日中疲れを感じる理由を見つけたいと望んでいる。" },
        { en: "It helps them organize their habits and understand their body better.", ja: "それは彼らが習慣を整理し、自分の体をよりよく理解するのに役立つ。" },
        { en: "Elena Gomez, a software engineer, decided to take a serious look at her sleep habits.", ja: "ソフトウェアエンジニアのエレナ・ゴメスは、自分の睡眠習慣を真剣に見直すことにした。" },
        { en: "Despite sleeping for eight hours, she often woke up feeling exhausted.", ja: "8時間眠っているにもかかわらず、彼女はしばしば疲れ果てて目を覚ました。" },
        { en: "She had visited doctors, but they could not find any major health issues.", ja: "彼女は医者にかかったが、彼らは大きな健康上の問題を見つけることはできなかった。" },
        { en: "To discover the real cause of her fatigue, she started a personal experiment.", ja: "彼女の疲労の本当の原因を発見するために、彼女は個人的な実験を始めた。" },
        { en: "Unlike a simple sleep diary where people just write down the time they went to bed, Elena's approach was much more detailed.", ja: "人々が単に寝た時間を書き留めるだけの単純な睡眠日記とは異なり、エレナのアプローチはずっと詳細だった。" },
        { en: "She decided to record everything about her environment and daily activities.", ja: "彼女は自分の環境や日常の活動に関するすべてを記録することに決めた。" },
        { en: "Elena used a smart watch to track her heart rate and movement during the night.", ja: "エレナは夜間の心拍数と動きを追跡するためにスマートウォッチを使用した。" },
        { en: "In addition, she wrote down the room temperature, the food she ate for dinner, and even the amount of light in her room.", ja: "さらに、彼女は室温、夕食に食べたもの、さらには部屋の光の量さえも書き留めた。" },
        { en: "She collected this data every single day for three months.", ja: "彼女はこのデータを3ヶ月間毎日集めた。" },
        { en: "Most of the information seemed useless at first.", ja: "最初、情報のほとんどは役に立たないように思えた。" },
        { en: "The records showed ordinary things like eating pasta for dinner or reading a book before bed, which did not seem to be related to her tiredness.", ja: "記録は夕食にパスタを食べたり、寝る前に本を読んだりするような日常的な事柄を示しており、それらは彼女の疲れとは関係がないように思えた。" },
        { en: "However, after analyzing the data, Elena found an important pattern.", ja: "しかし、データを分析した後、エレナは重要なパターンを発見した。" },
        { en: "She realized that on the days she used her smartphone right before bed, her sleep quality was much lower.", ja: "彼女は、寝る直前にスマートフォンを使った日は、睡眠の質がはるかに低いことに気づいた。" },
        { en: "The blue light from the screen was affecting her brain.", ja: "画面からのブルーライトが彼女の脳に影響を与えていた。" },
        { en: "As a result, she decided to stop using electronic devices one hour before sleeping.", ja: "その結果、彼女は寝る1時間前に電子機器を使うのをやめることにした。" },
        { en: "This small change made a huge difference.", ja: "この小さな変化が大きな違いを生んだ。" },
        { en: "She now wakes up feeling refreshed.", ja: "彼女は今、すっきりした気分で目を覚ます。" },
        { en: "She says that understanding her own data gave her control over her health, making her daily life more productive and enjoyable.", ja: "彼女は、自分のデータを理解することが健康を管理する力を与え、日常生活をより生産的で楽しいものにしてくれたと言っている。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Diaries (2024-3) - "Keeping a Detailed Record"

### 1. 量的構造
- **総単語数:** ~310 words
- **パラグラフ構成:**
  1. **導入:** 一般論（睡眠改善の必要性）と、記録をつける目的（原因究明）。
  2. **動機:** 主人公（Elena）の悩み（寝ても疲れている）。既存の解決策（医者）の限界。
  3. **方法:** 詳細なデータ収集（スマートウォッチ、室温、食事など）。一見無関係に見えるデータの蓄積。
  4. **発見と結果:** パターンの発見（スマホのブルーライト）。行動変容とQOLの向上。

### 2. 重要語彙
- **struggle:** 苦労する
- **exhausted:** 疲れ果てた
- **fatigue:** 疲労
- **experiment:** 実験
- **analyze:** 分析する
- **affect:** 影響を与える
- **productive:** 生産的な`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、睡眠の質を改善するために個人的なデータ収集を行った女性の話です。漫然と寝るだけでなく、自分の生活習慣や環境を詳細に記録することで、隠れた不調の原因を突き止め、生活の質を向上させることができるというエピソードです。

### 1. The Sleep Project (第1段落)
健康維持に睡眠は不可欠だが、多くの人が悩んでいる。最近では、疲れの原因を探るために睡眠パターンを記録する方法が一般的になってきている。

### 2. Elena's Problem (第2段落)
ソフトウェアエンジニアのエレナは、十分寝ても疲れが取れないことに悩んでいた。医者に行っても原因がわからなかったため、自分で詳細な記録をつける実験を始めた。

### 3. Gathering Data (第3段落)
彼女はスマートウォッチや手書きのメモを使い、心拍数、室温、夕食の内容、光の量などを3ヶ月間毎日記録した。最初は無意味に見えるデータも多かった。

### 4. The Discovery (第4段落)
データを分析した結果、就寝直前のスマートフォン使用が睡眠の質を下げていることに気づいた。使用をやめたことで目覚めが改善し、日常生活がより生産的になった。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Diaries (過去問) | The Sleep Project (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | 日記による自己分析・記憶 | 睡眠記録による自己分析・健康 | 記録(Log)を通じた生活改善 |
| **構造** | 一般論 → 個人の動機 → 記録手法(写真) → 発見(ストレス源) | 一般論 → 個人の動機 → 記録手法(データ) → 発見(スマホ) | 4段落構成、個人の実験と成果 |
| **設問1** | 日記をつける理由 (Reduce stress/Organize) | 睡眠記録をつける理由 (Find cause) | 第1段落の「目的」を問う |
| **設問2** | 40歳時の動機 (Past records insufficient) | 実験開始の動機 (Still tired) | 第2段落の「きっかけ」を問う |
| **設問3** | 記録の具体的方法 (Every 30 secs photo) | 記録の具体的方法 (Temp, diet, light) | 第3段落の「詳細な手法」を問う |
| **設問4** | 発見したこと (Stressed while driving) | 発見したこと (Phone affects sleep) | 第4段落の「因果関係」を問う |
| **設問5** | 全体の結論 (Quality of life increased) | 全体の結論 (Daily life improved) | 本文全体の「ポジティブな結果」 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Diaries (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 記憶の保存と再確認。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「過去を忘れないため」に始めたことが、現在のストレス源発見につながった。

* **The Sleep Project (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> 健康管理と問題解決。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「疲れの原因を知るため」に始めたことが、具体的な悪習慣の特定につながった。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** "To keep their thoughts organized" (日記の効用)
    * **Original:** "To find out the cause of their tiredness" (記録の効用)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** 過去の記録では不十分だった (Negative reason)。
    * **Original:** 十分寝ても疲れていた (Negative condition)。
* **Q3 (内容一致 - Para 3):**
    * **過去問:** "record every detail" (膨大な写真)。
    * **Original:** "tracked various details" (多様なデータ)。
* **Q4 (内容一致 - Para 4):**
    * **過去問:** 運転中のストレスに気づいた。
    * **Original:** スマホのブルーライトの影響に気づいた。
* **Q5 (内容一致 - Conclusion):**
    * **過去問:** "Increased the quality of his life" (QOL向上)。
    * **Original:** "Improve her daily life" (QOL向上)。`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>By collecting data on how they sleep, people <b>hope to find</b> the reasons why they feel tired during the day.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>手段 (M):</b> By collecting data [on how they sleep]</li>
    <li><b>主語 (S):</b> people</li>
    <li><b>動詞 (V):</b> hope to find</li>
    <li><b>目的語 (O):</b> the reasons [why they feel tired during the day]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>関係副詞 "why" が "reasons" を修飾しています。「なぜ日中疲れているのかという理由を見つけたい」という部分が、選択肢2の "find out the cause of their tiredness" と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>Despite sleeping for eight hours, she often <b>woke up</b> feeling exhausted. / To discover the real cause of her fatigue, she <b>started</b> a personal experiment.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>譲歩 (M):</b> Despite sleeping for eight hours</li>
    <li><b>主語 (S):</b> she</li>
    <li><b>動詞 (V):</b> woke up</li>
    <li><b>補語 (C):</b> feeling exhausted (分詞構文的用法)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"Despite..."（～にもかかわらず）が重要です。「8時間寝たのに疲れていた」という矛盾した状況が、実験を始める直接の動機（選択肢3）となっています。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>In addition, she <b>wrote down</b> the room temperature, the food she ate for dinner, and even the amount of light in her room.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>接続詞:</b> In addition</li>
    <li><b>主語 (S):</b> she</li>
    <li><b>動詞 (V):</b> wrote down</li>
    <li><b>目的語 (O):</b> room temperature, food..., and amount of light...</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>具体的な記録項目が列挙されています。これが選択肢2の "tracked various details like room temperature and diet" の直接的な根拠です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>She <b>realized</b> that on the days she used her smartphone right before bed, her sleep quality was much lower.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> She</li>
    <li><b>動詞 (V):</b> realized</li>
    <li><b>目的語 (O):</b> that [on the days... her sleep quality was much lower]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>that節の中で、「スマホを使った日」と「睡眠の質の低下」の因果関係が示されています。これが選択肢3の "Using her smartphone... lowered her sleep quality" に対応します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Conclusion)</h3>
<blockquote>She <b>says</b> that understanding her own data gave her control over her health, making her daily life more productive and enjoyable.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> She</li>
    <li><b>動詞 (V):</b> says</li>
    <li><b>目的語 (O):</b> that [understanding... gave her control...]</li>
    <li><b>分詞構文 (M):</b> making her daily life more productive and enjoyable</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>分詞構文 "making..." が結果を表しています。日常生活が生産的で楽しくなった（＝生活が改善した）という記述が、選択肢3の "Elena's experiment helped her improve her daily life" を裏付けます。</p>
</div>`
    }
  },
  "2024-2": {
    past: {
      title: "Bonobos",
      content: `## Title: Bonobos

Bonobos are animals that look similar to monkeys and chimpanzees. Not many people know about bonobos because they do not live in many different areas. They live in just one area of the Democratic Republic of the Congo, in the middle of Africa. If people find out that they have something in common with them, they might feel more connected to them.

Many people probably believe that humans are the only animal that is capable of caring about others. However, this is not the case. In one study, two bonobos were placed in rooms separated by a fence. An apple was hung from the top of one room, and only the bonobo in the other room could reach and release the apple by climbing the fence. Even though they did not get any apples or reward themselves for helping others, the bonobos often dropped the apple when there was another bonobo in the other room. Surprisingly, these bonobos were strangers to each other.

In a different test, bonobos watched two videos. In one video, their family members were yawning, the act of opening their mouths when they were sleepy. When bonobos watched their family members yawn, they were also likely to yawn themselves. Another video showed strangers yawning. The bonobos who watched this video yawned as much as when they watched their families yawn. In a similar setting, humans were more likely to yawn after seeing their friends or family members yawn than after seeing strangers yawn. This suggests that bonobos' ability to feel one another's feelings is more widespread than that of humans.

Bonobos' ability to care about others is probably due to the group structure that they live in. This becomes clear when we look at chimpanzees. Bonobos live in large groups where there is no clear leadership. However, there is a distinct power structure within a chimpanzee group, and a large, strong male takes on a leadership role. Because of this, they have less reason to be friendly. Bonobos, however, live in peace and work together more because of how their groups are set up, while chimpanzees are more unfriendly.`,
      questions: `### Questions

**(27) Why do many people not know much about bonobos?**
1. The country where they live does not make much effort to protect them.
2. They are not as friendly as animals such as monkeys or chimpanzees.
3. They avoid contact with humans as much as possible to protect their babies.
4. The location where they live is only in a certain area of Africa.

**(28) In one study,**
1. bonobos were seen to help other bonobos without getting a reward.
2. bonobos were required to push a button on the wall to get a piece of fruit.
3. some bonobos were able to jump out of the cage after getting some fruit.
4. researchers decided that bonobos and chimpanzees were very similar.

**(29) In a study about yawning, researchers found**
1. bonobos copied what people did instead of copying other bonobos.
2. bonobos could feel others' feelings even more than humans.
3. most bonobos did not yawn when they were feeling tired.
4. yawning was more common for younger bonobos than for older ones.

**(30) Chimpanzees**
1. organize their groups in the same way that bonobo groups organize themselves.
2. tend to be less friendly because there is a strong leader among them.
3. form a larger group than bonobos to maintain strong connections between individuals.
4. move from one place to another to find a better living environment.

**(31) Which of the following statements is true?**
1. Bonobos almost never yawn when they are with bonobos from other families.
2. All experiments involving bonobos were conducted by the Democratic Republic of the Congo.
3. Bonobos live peacefully in groups that have no strong leaders.
4. Chimpanzees help others even when such actions will not benefit themselves.

---
**Answer Key:** (27) 4, (28) 1, (29) 2, (30) 2, (31) 3`,
      translations: [
        { en: "Bonobos are animals that look similar to monkeys and chimpanzees.", ja: "ボノボは、サルやチンパンジーに似た外見の動物である。" },
        { en: "Not many people know about bonobos because they do not live in many different areas.", ja: "多くの異なる地域に住んでいるわけではないため、ボノボについて知っている人は多くない。" },
        { en: "They live in just one area of the Democratic Republic of the Congo, in the middle of Africa.", ja: "彼らはアフリカ中央部のコンゴ民主共和国のたった一つの地域に住んでいる。" },
        { en: "If people find out that they have something in common with them, they might feel more connected to them.", ja: "もし人々が彼らと共通点があることを知れば、彼らにもっと親しみを感じるかもしれない。" },
        { en: "Many people probably believe that humans are the only animal that is capable of caring about others.", ja: "多くの人々は、おそらく人間だけが他者を思いやることができる動物だと信じている。" },
        { en: "However, this is not the case.", ja: "しかし、事実はそうではない。" },
        { en: "In one study, two bonobos were placed in rooms separated by a fence.", ja: "ある研究で、2頭のボノボがフェンスで仕切られた部屋に入れられた。" },
        { en: "An apple was hung from the top of one room, and only the bonobo in the other room could reach and release the apple by climbing the fence.", ja: "一方の部屋の上部からリンゴが吊るされ、もう一方の部屋にいるボノボだけがフェンスを登ってそのリンゴに手が届き、落とすことができた。" },
        { en: "Even though they did not get any apples or reward themselves for helping others, the bonobos often dropped the apple when there was another bonobo in the other room.", ja: "他者を助けることで自分自身はリンゴも報酬も得られないにもかかわらず、もう一方の部屋に別のボノボがいるとき、そのボノボはしばしばリンゴを落とした。" },
        { en: "Surprisingly, these bonobos were strangers to each other.", ja: "驚いたことに、これらのボノボはお互いに見知らぬ同士だった。" },
        { en: "In a different test, bonobos watched two videos.", ja: "別のテストでは、ボノボは2つのビデオを見た。" },
        { en: "In one video, their family members were yawning, the act of opening their mouths when they were sleepy.", ja: "一つのビデオでは、彼らの家族が眠い時に口を開ける行動である「あくび」をしていた。" },
        { en: "When bonobos watched their family members yawn, they were also likely to yawn themselves.", ja: "家族があくびをするのを見たとき、ボノボ自身もあくびをする傾向があった。" },
        { en: "Another video showed strangers yawning.", ja: "もう一つのビデオは、見知らぬ他者があくびをしている様子を見せた。" },
        { en: "The bonobos who watched this video yawned as much as when they watched their families yawn.", ja: "このビデオを見たボノボは、家族があくびをするのを見たときと同じくらいあくびをした。" },
        { en: "In a similar setting, humans were more likely to yawn after seeing their friends or family members yawn than after seeing strangers yawn.", ja: "同様の状況において、人間は見知らぬ人のあくびを見るよりも、友人や家族があくびをするのを見た後の方があくびをしやすい傾向があった。" },
        { en: "This suggests that bonobos' ability to feel one another's feelings is more widespread than that of humans.", ja: "これは、お互いの感情を感じ取るボノボの能力が、人間よりも広く及んでいることを示唆している。" },
        { en: "Bonobos' ability to care about others is probably due to the group structure that they live in.", ja: "ボノボが他者を思いやる能力は、おそらく彼らが住む集団構造によるものだろう。" },
        { en: "This becomes clear when we look at chimpanzees.", ja: "チンパンジーを見ると、このことが明らかになる。" },
        { en: "Bonobos live in large groups where there is no clear leadership.", ja: "ボノボは明確なリーダーシップのない大きな集団で生活している。" },
        { en: "However, there is a distinct power structure within a chimpanzee group, and a large, strong male takes on a leadership role.", ja: "しかし、チンパンジーの集団内にははっきりとした権力構造があり、大きく強いオスがリーダーシップの役割を担う。" },
        { en: "Because of this, they have less reason to be friendly.", ja: "このため、彼らには友好的である理由が少ない。" },
        { en: "Bonobos, however, live in peace and work together more because of how their groups are set up, while chimpanzees are more unfriendly.", ja: "しかしながら、ボノボは集団の成り立ちのおかげで平和に暮らし、より協力し合うが、一方でチンパンジーはより非友好的である。" }
      ]
    },
    original: {
      title: "Wolves and Dogs",
      content: `## Title: Wolves and Dogs

Dogs are known as "man's best friend," and they share a long history with humans. They originally came from wolves, so the two animals share many genes. Because dogs are friendly and live closely with people, many people assume that dogs are naturally better at cooperation than wolves. Wolves are often seen as wild and aggressive animals that fight with each other. However, recent research suggests that when it comes to working with their own kind, wolves may actually be more cooperative than dogs.

In one study conducted at a research center in Austria, scientists tested how well wolves and dogs could work together. They used a simple task involving a tray of food. To get the food, two animals had to pull two ends of a rope at the same time. If only one pulled, the rope would come loose, and the food would maximize stay out of reach. The results showed that wolves were very successful at this task. They waited for a partner and pulled the rope together. Dogs, on the other hand, often failed because they tried to get the food alone or did not wait for the other dog.

Another difference was found in how they shared food. In the wild, wolves hunt large animals like deer or moose as a team. After a successful hunt, they share the meat with the pack. Even the lower-ranking wolves are allowed to eat. In contrast, dogs have a stricter social hierarchy. In experiments where dogs were given food, the dominant dog usually ate everything and did not let the others come close. This suggests that wolves care more about fairness within their group.

The reason for these differences lies in how they evolved. When humans started living with dogs, humans became the leaders. Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs. Wolves, however, continued to live in the wild. They had to rely on each other to survive and raise their young. This forced them to maintain a high level of cooperation and teamwork that dogs no longer need.`,
      questions: `### Original Questions

**(1) What do many people often assume about dogs and wolves?**
1. Dogs are less intelligent than wolves because they live with humans.
2. Wolves are more friendly to humans than dogs are.
3. Dogs are better at working together than wolves are.
4. Wolves and dogs have completely different genes.

**(2) In the rope-pulling experiment, why were wolves successful?**
1. They were stronger than the dogs and could pull the heavy tray alone.
2. They coordinated their actions and pulled the rope at the same time.
3. They were given more food than the dogs as a reward.
4. They used their paws to hold the rope instead of their mouths.

**(3) How did the eating behavior of dogs differ from that of wolves?**
1. Dogs preferred to eat vegetables instead of meat.
2. Stronger dogs prevented other dogs from eating the food.
3. Dogs shared their food equally with every member of the group.
4. Dogs hid their food in the ground to eat it later.

**(4) According to the passage, why did dogs lose some of their cooperative skills?**
1. They began to rely on humans to lead them and provide food.
2. They started to live in smaller groups than wolves.
3. They became too aggressive to work with other animals.
4. They needed to compete with wolves for territory.

**(5) Which of the following statements is true?**
1. The research in Austria showed that dogs are better problem solvers than wolves.
2. Wolves have a strict hierarchy where only the leader is allowed to eat.
3. Domestication made dogs more independent and less reliant on others.
4. Wolves maintained their teamwork skills because they needed them to survive in the wild.

---
**Answer Key:** (1) 3, (2) 2, (3) 2, (4) 1, (5) 4`,
      translations: [
        { en: "Dogs are known as \"man's best friend,\" and they share a long history with humans.", ja: "犬は「人間の最良の友」として知られており、人間と長い歴史を共有している。" },
        { en: "They originally came from wolves, so the two animals share many genes.", ja: "彼らはもともとオオカミから派生したため、その2つの動物は多くの遺伝子を共有している。" },
        { en: "Because dogs are friendly and live closely with people, many people assume that dogs are naturally better at cooperation than wolves.", ja: "犬は友好的で人と親密に暮らしているため、多くの人は犬の方がオオカミよりも生まれつき協力が得意だと思い込んでいる。" },
        { en: "Wolves are often seen as wild and aggressive animals that fight with each other.", ja: "オオカミはしばしば、互いに争う野生的で攻撃的な動物だと見なされている。" },
        { en: "However, recent research suggests that when it comes to working with their own kind, wolves may actually be more cooperative than dogs.", ja: "しかし、最近の研究は、同種同士で協力することに関しては、オオカミの方が実際には犬よりも協力的かもしれないことを示唆している。" },
        { en: "In one study conducted at a research center in Austria, scientists tested how well wolves and dogs could work together.", ja: "オーストリアの研究センターで行われたある研究で、科学者たちはオオカミと犬がどれだけうまく協力できるかをテストした。" },
        { en: "They used a simple task involving a tray of food.", ja: "彼らは食べ物の載ったトレイを含む単純な課題を使用した。" },
        { en: "To get the food, two animals had to pull two ends of a rope at the same time.", ja: "食べ物を得るためには、2頭の動物がロープの両端を同時に引かなければならなかった。" },
        { en: "If only one pulled, the rope would come loose, and the food would stay out of reach.", ja: "もし1頭だけが引くと、ロープは外れてしまい、食べ物は手の届かないままになってしまう。" },
        { en: "The results showed that wolves were very successful at this task.", ja: "結果は、オオカミがこの課題において非常に成功したことを示した。" },
        { en: "They waited for a partner and pulled the rope together.", ja: "彼らはパートナーを待ち、一緒にロープを引いた。" },
        { en: "Dogs, on the other hand, often failed because they tried to get the food alone or did not wait for the other dog.", ja: "一方、犬は自分だけで食べ物を得ようとしたり、他の犬を待たなかったりしたため、しばしば失敗した。" },
        { en: "Another difference was found in how they shared food.", ja: "別の違いは、彼らがどのように食べ物を分け合うかという点で見つかった。" },
        { en: "In the wild, wolves hunt large animals like deer or moose as a team.", ja: "野生では、オオカミはチームとしてシカやヘラジカのような大きな動物を狩る。" },
        { en: "After a successful hunt, they share the meat with the pack.", ja: "狩りが成功した後、彼らは肉を群れで分け合う。" },
        { en: "Even the lower-ranking wolves are allowed to eat.", ja: "地位の低いオオカミでさえ食べることが許される。" },
        { en: "In contrast, dogs have a stricter social hierarchy.", ja: "対照的に、犬はより厳格な社会的階層を持っている。" },
        { en: "In experiments where dogs were given food, the dominant dog usually ate everything and did not let the others come close.", ja: "犬に食べ物が与えられた実験では、支配的な犬が通常すべてを食べてしまい、他の犬を近づけさせなかった。" },
        { en: "This suggests that wolves care more about fairness within their group.", ja: "これは、オオカミの方が集団内の公平性をより気にかけていることを示唆している。" },
        { en: "The reason for these differences lies in how they evolved.", ja: "これらの違いの理由は、彼らがどのように進化したかにある。" },
        { en: "When humans started living with dogs, humans became the leaders.", ja: "人間が犬と暮らし始めたとき、人間がリーダーになった。" },
        { en: "Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs.", ja: "犬は食べ物や指示を人間に頼ることを学んだため、他の犬と問題を解決する必要性を失った。" },
        { en: "Wolves, however, continued to live in the wild.", ja: "しかし、オオカミは野生で生き続けた。" },
        { en: "They had to rely on each other to survive and raise their young.", ja: "彼らは生き残り、子を育てるために互いに頼り合わなければならなかった。" },
        { en: "This forced them to maintain a high level of cooperation and teamwork that dogs no longer need.", ja: "これは彼らに、犬がもはや必要としない高いレベルの協力とチームワークを維持することを強いた。" }
      ]
    },
    analysis: {
      intent: `## 作成意図・根拠 (Blueprint)

**ターゲットモデル:** Bonobos (2024-2)

### 1. 量的構造
- **総単語数:** ~330 words
- **パラグラフ構成:**
  1. **一般通念と導入:** 犬（協力的と思われている）とオオカミ（野生的と思われている）の対比。実はオオカミの方が同種間の協力が得意であるという提起。
  2. **実験1 (協力):** ロープを引く実験。オオカミは成功（待機・協力）、犬は失敗（単独行動）。
  3. **実験2 (分配):** 食料分配の観察。オオカミは群れで分けるが、犬はボスが独占する傾向。
  4. **理由・進化:** なぜ違いが生まれたか。犬は人間への依存（リーダーは人間）、オオカミは野生での生存（チームワーク必須）という進化の背景。

### 2. 重要語彙
- **cooperation:** 協力
- **assume:** 思い込む、仮定する
- **aggressive:** 攻撃的な
- **hierarchy:** 階層、ヒエラルキー
- **dominant:** 支配的な、優位な
- **evolve:** 進化する
- **rely on:** ～に頼る`,
      summary: `## 講師用：本文要約 (Instructor Summary)

本文は、犬とオオカミの社会的行動の違い、特に「同種間の協力」に焦点を当てた比較文化（動物行動学）的な文章です。一般的に犬は人懐っこく協力的だと思われていますが、実はオオカミの方が仲間同士のチームワークや公平な分配において優れていることを、実験結果を交えて説明しています。

### 1. Intro: Wolves and Dogs (第1段落)
犬はオオカミから進化した近縁種だが、一般的に犬は協力的、オオカミは攻撃的と思われている。しかし最近の研究は、仲間同士の協力に関してはオオカミの方が優れている可能性を示唆している。

### 2. The Rope Test (第2段落)
オーストリアの研究で、2頭同時にロープを引かないと餌が取れない実験を行った。オオカミはパートナーを待って協力できたが、犬は単独で取ろうとして失敗することが多かった。

### 3. Food Sharing (第3段落)
食料の分配においても違いがある。野生のオオカミは狩りの獲物を群れで分かち合うが、犬は厳格な階層社会を持ち、ボスが餌を独占して他の犬に分け与えない傾向がある。

### 4. The Reason (第4段落)
この違いは進化の過程にある。犬は人間をリーダーとして頼るように進化したため、犬同士の協力スキルが低下した。一方、オオカミは野生で生き残るために高度なチームワークを維持する必要があった。

---
講師用資料：授業前の確認や、生徒への解説の構成案としてご活用ください。`,
      comparison: `## 過去問との比較分析 (Category Comparison)

| 項目 | Bonobos (過去問) | Wolves and Dogs (オリジナル) | 共通点 (Commonality) |
| :--- | :--- | :--- | :--- |
| **テーマ** | ボノボの利他性とチンパンジーとの比較 | オオカミの協力性とイヌとの比較 | 近縁種間の行動比較（善 vs 悪の逆転） |
| **構造** | 導入(知名度) → 実験1(利他) → 実験2(共感) → 社会構造の理由 | 導入(通念) → 実験1(協力) → 実験2(分配) → 進化的理由 | 4段落構成、2つの実験＋理由付け |
| **設問1** | ボノボの知名度が低い理由 | 犬とオオカミに対する一般的通念 | 第1段落の「現状の認識」を問う |
| **設問2** | 実験での行動（報酬なしで助ける） | 実験での行動（協力して引く） | 第2段落の実験結果（ポジティブな行動） |
| **設問3** | あくび実験の結果（共感） | 食事行動の違い（独占 vs 分配） | 第3段落の対照的な行動 |
| **設問4** | チンパンジーの社会（リーダー） | 犬の進化（人間への依存） | 第4段落の「ネガティブ側の理由」 |
| **設問5** | 全体の結論（True statement） | 全体の結論（True statement） | 全体的な理解と正誤判定 |

<br/>

### 1. トピックと展開の相違 (Topic Differences)

* **Bonobos (過去問):**
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> ボノボ（平和） vs チンパンジー（攻撃的）。
    * <span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「見知らぬ他者」への親切心と共感能力。

* **Wolves and Dogs (オリジナル):**
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Topic</span> オオカミ（協力的） vs イヌ（依存的）。
    * <span style="background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; font-size:0.85em;">Focus</span> 「同種間」のタスク解決と資源分配の公平性。

<br/>

### 2. 設問設計の比較 (Question Design)

* **Q1 (内容一致 - Para 1):**
    * **過去問:** Why not know much? -> Live in one area.
    * **Original:** What do people assume? -> Dogs are better at cooperation. (導入部の誤解を問う)
* **Q2 (内容一致 - Para 2):**
    * **過去問:** help other bonobos without reward.
    * **Original:** coordinated actions / pulled together. (具体的な成功行動)
* **Q3 (内容一致 - Para 3):**
    * **過去問:** copied strangers (empathy).
    * **Original:** stronger dogs prevented others (lack of sharing). (対照的な行動)
* **Q4 (内容一致 - Para 4):**
    * **過去問:** Chimps tend to be less friendly... strong leader.
    * **Original:** Dogs lost skills... rely on humans. (能力喪失の理由)
* **Q5 (True Statement):**
    * **過去問:** Bonobos live peacefully...
    * **Original:** Wolves maintained teamwork... (要旨の肯定)`,
      syntax: `## 4. 正解の根拠となるセンテンスの構文解析

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q1 (Para 1)</h3>
<blockquote>...many people assume that dogs are naturally better at cooperation than wolves.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> many people</li>
    <li><b>動詞 (V):</b> assume</li>
    <li><b>目的語 (O):</b> that [dogs are naturally better at cooperation than wolves]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"assume that..."（～と思い込む、仮定する）がキーです。この文の内容が、選択肢3の "Dogs are better at working together than wolves are"（という通念がある）に該当します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q2 (Para 2)</h3>
<blockquote>They waited for a partner and pulled the rope together.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> They (The wolves)</li>
    <li><b>動詞 (V):</b> waited / pulled</li>
    <li><b>目的語 (O):</b> a partner / the rope</li>
    <li><b>修飾語 (M):</b> together</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>等位接続詞 "and" で2つの動作（待つ、引く）がつながれています。「パートナーを待って一緒に引いた」という行動が、選択肢2の "coordinated their actions..."（行動を調整した）の具体的な内容です。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q3 (Para 3)</h3>
<blockquote>In experiments where dogs were given food, the dominant dog usually ate everything and did not let the others come close.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>修飾語 (M):</b> In experiments [where dogs were given food]</li>
    <li><b>主語 (S):</b> the dominant dog</li>
    <li><b>動詞 (V):</b> ate / did not let</li>
    <li><b>目的語 (O):</b> everything / the others</li>
    <li><b>補語 (C):</b> (come) close (let O do)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>使役動詞 "let O do"（Oに～させる）の否定形 "did not let..." が使われています。「他の犬を近づけさせなかった」＝「独占した」という事実が、選択肢2の "prevented other dogs from eating" と一致します。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q4 (Para 4)</h3>
<blockquote>Dogs learned to depend on humans for food and instructions, so they lost the need to solve problems with other dogs.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> Dogs</li>
    <li><b>動詞 (V):</b> learned to depend / lost</li>
    <li><b>目的語 (O):</b> the need [to solve problems...]</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>因果関係を示す接続詞 "so" が使われています。原因（人間に頼るようになった）と結果（他の犬と協力する必要性を失った）が明確に示されており、選択肢1の根拠となります。</p>
</div>

<h3 style="color:#2563eb; font-weight:bold;">Sentence for Q5 (Overall/Conclusion)</h3>
<blockquote>This forced them to maintain a high level of cooperation and teamwork that dogs no longer need.</blockquote>
<div class="syntax-box syntax-box-structure">
  <ul>
    <li><b>主語 (S):</b> This (Wild environment/Survival needs)</li>
    <li><b>動詞 (V):</b> forced</li>
    <li><b>目的語 (O):</b> them (wolves)</li>
    <li><b>補語 (C):</b> to maintain a high level of cooperation... (force O to do)</li>
  </ul>
</div>
<div class="syntax-box syntax-box-point">
  <p>"force O to do"（Oに～することを強いる＝余儀なくさせる）という構文です。野生環境がオオカミに協力を維持させたという結論が、選択肢4の "maintained their teamwork skills because they needed them to survive" と合致します。</p>
</div>`
    }
  }
};
