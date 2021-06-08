# 最新研究報告指出 Clubhouse 以明文形式傳送使用者及聊天室的ID，而位於中國的 Agora 擁有加密金鑰可以解開加密的聲音檔案

<!--more-->
<!--54-->
<br><br/>
該研究報告證實了多數人在網路上的猜測，Clubhouse 官方也證實並將盡快改善。
<br><br/>
斯坦福網路觀察站(SIO)發表報告指出，已經確認中國聲網公司（Agora Inc）替 Clubhouse 提供了後台基礎架構，因此中國聲網公司可以獲取用戶的原始音頻資料，因此也存在把它交給中國政府的潛在風險

[研究報告與技術資料](https://cyber.fsi.stanford.edu/io/news/clubhouse-china)
>這份報告還指出，研究團隊觀察到聊天室的數據被中轉到一些位於中國的服務器上，而聲音數據則被中轉到由中國實體所管理的服務器上。

根據 Agora 的開發文件，其語音開發使用 Agora RTC SDK 套件，SIO觀察到其使用 UDP 將封包發送到名為"qos-america.agoralab.co"的服務器。

[資料來源](https://web.archive.org/web/20210212214941if_/https://docs.agora.io/en/Agora%20Platform/term_agora_rtc_sdk?platform=Android)
<br><br/>
根據 Agora 的開發文件，Agora 可以取得加密密鑰。儘管文件未指定使用哪種加密方式，但它很可能是採用基於UDP的對稱加密。也就是 Clubhouse 並沒有使用點對點加密技術（E2EE）。

[資料來源](https://docs.agora.io/en/Voice/channel_encryption_android?platform=Android)
