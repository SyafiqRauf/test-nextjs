import ProfileImageGGPlay from "@/app/components/ProfileImageGGPlay";
import ProfileTabList from "@/app/components/ProfileTabList";

const page = ({ params }: any) => {
  return (
    <>
      <div className="flex flex-col gap-8 mb-36">
        <ProfileImageGGPlay username={params.publisherId} />

        <div>
          <ProfileTabList />
        </div>
      </div>
    </>
  );
};

export default page;
