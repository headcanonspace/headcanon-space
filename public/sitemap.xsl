<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:html="http://www.w3.org/TR/html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&amp;display=swap');
          
          :root {
            --color-bg: #fafafa;
            --color-surface: #ffffff;
            --color-primary: #6366f1;
            --color-primary-dark: #4f46e5;
            --color-text-main: #1e293b;
            --color-text-muted: #64748b;
            --color-border: #f1f5f9;
            --radius-md: 12px;
            --radius-sm: 6px;
            --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px -1px rgba(0, 0, 0, 0.02);
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--color-bg);
            color: var(--color-text-main);
            line-height: 1.5;
            padding: 60px 20px;
          }

          .container {
            max-width: 960px;
            margin: 0 auto;
          }

          /* --- Minimal Header --- */
          .header {
            margin-bottom: 35px;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--color-primary);
            background-color: #f5f3ff;
            padding: 4px 10px;
            border-radius: 20px;
            margin-bottom: 12px;
          }

          .header h1 {
            font-size: 32px;
            font-weight: 700;
            color: #0f172a;
            letter-spacing: -0.5px;
            margin-bottom: 6px;
          }

          .header p {
            font-size: 15px;
            color: var(--color-text-muted);
            font-weight: 400;
            margin-bottom: 16px;
          }

          .meta-info {
            display: inline-flex;
            align-items: center;
            gap: 16px;
            font-size: 13px;
            color: var(--color-text-muted);
            background-color: var(--color-surface);
            border: 1px solid var(--color-border);
            padding: 8px 16px;
            border-radius: var(--radius-sm);
            box-shadow: var(--shadow);
          }

          .meta-info strong {
            color: var(--color-primary);
            font-weight: 600;
          }

          .meta-divider {
            width: 1px;
            height: 12px;
            background-color: #e2e8f0;
          }

          /* --- Table Styling --- */
          .table-wrapper {
            background-color: var(--color-surface);
            border: 1px solid #e2e8f0;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow);
            overflow: hidden;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }

          th {
            background-color: #f8fafc;
            color: #475569;
            font-weight: 600;
            font-size: 12px;
            padding: 14px 20px;
            border-bottom: 1px solid #e2e8f0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          td {
            padding: 14px 20px;
            border-bottom: 1px solid var(--color-border);
            font-size: 14.5px;
            vertical-align: middle;
          }

          tr:last-child td {
            border-bottom: none;
          }

          tr:hover td {
            background-color: #faf5ff;
          }

          /* --- Links --- */
          .sitemap-link {
            color: #2563eb;
            text-decoration: none;
            font-weight: 400;
            transition: color 0.15s ease;
            word-break: break-all;
          }

          .sitemap-link:hover {
            color: var(--color-primary-dark);
            text-decoration: underline;
          }

          /* --- Badges --- */
          .priority-tag {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 4px;
            text-align: center;
          }

          .priority-high {
            background-color: #dcfce7;
            color: #15803d;
          }

          .priority-medium {
            background-color: #dbeafe;
            color: #1d4ed8;
          }

          .priority-low {
            background-color: #f1f5f9;
            color: #475569;
          }

          /* --- Footer --- */
          .footer {
            text-align: center;
            font-size: 12.5px;
            color: var(--color-text-muted);
            margin-top: 30px;
          }

          .footer a {
            color: var(--color-primary);
            text-decoration: none;
            font-weight: 500;
          }

          /* --- Responsive --- */
          @media (max-width: 768px) {
            body {
              padding: 40px 10px;
            }
            .header h1 {
              font-size: 26px;
            }
            th, td {
              padding: 10px 14px;
              font-size: 13.5px;
            }
            .meta-info {
              flex-direction: column;
              align-items: flex-start;
              gap: 6px;
              width: 100%;
            }
            .meta-divider {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Minimal Header -->
          <header class="header">
            <span class="badge">Sitemap Directory</span>
            <h1>XML Sitemap</h1>
            <p>Generated by Headcanon Space to help search engines crawl and index our page structures efficiently.</p>
            
            <div class="meta-info">
              <span>Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></span>
              <span class="meta-divider"></span>
              <span>Sitemap Format: <strong>XML Schema 0.9</strong></span>
              <span class="meta-divider"></span>
              <span>Styled Using: <strong>XSLT 1.0</strong></span>
            </div>
          </header>

          <!-- Table wrapper -->
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 55%;">URL Location</th>
                  <th style="width: 15%; text-align: center;">Priority</th>
                  <th style="width: 15%; text-align: center;">Change Freq</th>
                  <th style="width: 15%; text-align: right;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:sort select="sitemap:priority" order="descending"/>
                  <tr>
                    <td>
                      <a class="sitemap-link" href="{sitemap:loc}" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="text-align: center;">
                      <xsl:variable name="p" select="sitemap:priority"/>
                      <span>
                        <xsl:attribute name="class">
                          <xsl:choose>
                            <xsl:when test="$p &gt;= 0.9">priority-tag priority-high</xsl:when>
                            <xsl:when test="$p &gt;= 0.6">priority-tag priority-medium</xsl:when>
                            <xsl:otherwise>priority-tag priority-low</xsl:otherwise>
                          </xsl:choose>
                        </xsl:attribute>
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td style="text-align: center; color: var(--color-text-muted); font-size: 13.5px;">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td style="text-align: right; color: var(--color-text-muted); font-size: 13.5px;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <!-- Footer -->
          <footer class="footer">
            Generated by <a href="https://headcanonspace.com">Headcanon Space</a> © 2026.
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
