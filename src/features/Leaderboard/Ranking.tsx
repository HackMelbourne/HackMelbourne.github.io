interface RankingProps {
  rank: number;
  name: string;
  score: number;
}

const Ranking = ({ rank, name, score }: RankingProps) => {
  return (
    <div className="flex w-80 h-20 gap-6 items-center justify-center px-7 m-auto rounded-xl border-[1.5px] border-primary">
        <p className="text-3xl font-bold">
          #{rank}
        </p>
        <p className="text-xl">
          {name}
        </p>
      <p className="text-xl ml-auto">
        {score}
      </p>
    </div>
  )
}

export default Ranking;