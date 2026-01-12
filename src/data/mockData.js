export const AVAILABLE_YEARS = [
  { type: "separator", label: "━━━ 2級 大問3B (4問) ━━━" },
  { year: 2024, session: 1, label: "2024年第1回 (サンプル)" },
  { year: 2025, session: 2, label: "2025年第2回 (The Mirror Test)" },
  { year: 2025, session: 1, label: "2025年第1回 (History of Tea Bags)" },
];

const SAMPLE_TEXT = `## Title: Sample Passage
This is a sample passage for Grade 2.`;

const SAMPLE_QUESTIONS = `### Questions
**(1) Sample Question?**
1. Answer 1
2. Answer 2
3. Answer 3
4. Answer 4

---
**Answer Key:** (1) 1
`;

export const MOCK_DATA = {
  "2024-1": {
    past: {
      title: "Sample Passage",
      content: SAMPLE_TEXT,
      questions: SAMPLE_QUESTIONS
    },
    original: {
      title: "Sample Original",
      content: "Sample original content",
      questions: "Sample original questions"
    },
    analysis: {
      intent: "Sample intent",
      comparison: "Sample comparison",
      syntax: "Sample syntax"
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
  }
};
