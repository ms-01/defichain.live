import { Container } from "@components/commons/Container";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { useTranslation } from "../../../../hooks/useTranslation";
import { staticStatistics } from "../../../../data/staticStatistics";

export function DexStatisticsDisplay() {
  const { t } = useTranslation("page-explore-dex");

  const statsItems = [
    {
      title: t("statisticsDisplay.totalValueLocked.title"),
      prefix: "$",
      stats: staticStatistics.tvl.dex,
      testID: "total-value-locked",
    },
    {
      title: t("statisticsDisplay.tradingVolume.title"),
      prefix: "$",
      stats: staticStatistics.dex.tradingVolume24h,
      testID: "trading-volume",
    },
    {
      title: t("statisticsDisplay.tokens.title"),
      stats: staticStatistics.dex.tokens,
      testID: "statistics-display-tokens",
    },
  ];

  return (
    <Container className="lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px]">
      <StatisticPanel
        displayItem={statsItems}
        displayStripCustomStyle="-scroll-mt-[100px]"
        displayId="explore-dex-statistics-display"
      />
    </Container>
  );
}
