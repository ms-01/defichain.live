import { Container } from "@components/commons/Container";
import { useUnitSuffix } from "@hooks/useUnitSuffix";
import classNames from "classnames";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { StatisticPanel } from "@components/commons/StatisticPanel";
import { useRouter } from "next/router";
import { useTranslation } from "../../hooks/useTranslation";
import { staticStatistics } from "../../data/staticStatistics";
import { calculatePercentage } from "../../shared/calculatePercentage";

export function StatsDisplay() {
  const router = useRouter();

  const stats = {
    tvl: staticStatistics.tvl,
    count: {
      masternodes: staticStatistics.masternodes.total,
    },
  };
  const { supply } = staticStatistics;
  const { t } = useTranslation("page-index");
  const dimensions = useWindowDimensions();

  const { suffix, value } = useUnitSuffix(
    stats ? stats.tvl.masternodes.toString() : "N/A",
  );

  const formattedValue =
    router.locale === "de" ? `${value} ${suffix}` : value + suffix;
  const masternodeValue = value === "N/A" ? undefined : `${formattedValue}`;

  const statsItems = [
    {
      title: t("StatisticsSection.dfiMinted.title"),
      stats: supply?.total,
      desc:
        supply?.total === undefined
          ? supply?.total
          : `${calculatePercentage(supply.total, supply.max)} of max supply`,
      testID: "dfi-minted",
    },
    {
      title:
        dimensions.width <= 600
          ? t("StatisticsSection.tvlLocked.mobileTitle")
          : t("StatisticsSection.tvlLocked.title"),
      prefix: "$",
      stats: stats?.tvl.total,
      desc:
        stats?.tvl.total === undefined
          ? stats?.tvl.total
          : t("StatisticsSection.tvlLocked.desc"),
      descStyle: "lg:block hidden",
      testID: "tvl-locked",
    },
    {
      title: t("StatisticsSection.masternodes.title"),
      stats: stats?.count.masternodes,
      desc: masternodeValue === undefined ? masternodeValue : "4M+ locked",
      testID: "masternodes",
    },
  ];

  return (
    <Container className="relative lg:mt-[57px] mt-[76px] lg:z-10">
      <StatisticPanel
        displayItem={statsItems}
        displayStripCustomStyle="-scroll-mt-[150px]"
        displayId="statistics_display"
      />
      <div
        className={classNames(
          "absolute z-[-1] bg-contain bg-no-repeat bg-left bg-[url(/assets/img/index/index-cube.png)]",
          "lg:top-0 md:top-[65px] top-[108px] lg:left-[-200px] md:-left-[12em] -left-20",
          "2xl:w-full 2xl:h-[600px] 2xl:left-[-600.86px] lg:w-full lg:h-[400px] md:w-[280px] md:h-[280px] w-[208px] h-[208px]",
        )}
      />
    </Container>
  );
}
