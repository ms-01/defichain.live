import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import { Section } from "@components/commons/Section";
import { Head } from "@components/commons/Head";
import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Hunter } from "./_components/Hunter";

export default function BugBountyPage(): JSX.Element {
  return (
    <>
      <Head
        title="Historical Bug Bounty Archive"
        description="Historical records of the former DeFiChain Bug Bounty Program."
      />

      <PageHeader title="Historical Bug Bounty Archive">
        <div className="mt-10 text-xl text-gray-200">
          This page preserves information about the former DeFiChain Bug Bounty
          Program.
        </div>
      </PageHeader>

      <Container>
        <Section title="Program Status" testId="ProgramStatus">
          <div className="text-gray-200">
            <p>
              The original DeFiChain Bug Bounty Program is documented here for
              historical reference only.
            </p>

            <p className="mt-4">
              DeFiChain.live does not operate or guarantee the former program,
              its reward offers, submission procedures, or security contacts.
            </p>

            <p className="mt-4">
              The former program advertised rewards of up to USD 50,000. This
              was a historical offer and does not constitute a current reward
              commitment.
            </p>

            <p className="mt-4">
              This archive may serve as a foundation for a future community-led
              security program. No such program is announced by this page.
            </p>

            <p className="mt-4">
              Please do not publish exploitable security vulnerabilities in
              public issues. For vulnerabilities affecting this website, use a
              private reporting channel confirmed by the repository maintainers.
            </p>
          </div>
        </Section>

        <LeaderboardSection />
      </Container>
    </>
  );
}

function LeaderboardSection(): JSX.Element {
  const { t } = useTranslation("page-bugbounty");

  const hunters: any[] = t("LeaderboardSection.hunters", {
    returnObjects: true,
  });

  return (
    <Section title="Historical Leaderboard" testId="LeaderboardSection">
      <div
        className="w-full text-xl text-gray-200 mb-6"
        data-testid="Header.desc.main"
      >
        Historical recognition of participants in the former DeFiChain Bug
        Bounty Program.
      </div>

      <div>
        {hunters.map((hunter, index) => (
          <Hunter hunter={hunter} index={index} key={`hunter-${index}`} />
        ))}
      </div>
    </Section>
  );
}
