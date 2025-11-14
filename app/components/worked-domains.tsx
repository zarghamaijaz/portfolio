import Button from "@/app/components/ui/button";
import {
  FileSliders,
  LayoutDashboard,
  ShoppingBag,
  SquareMousePointer,
} from "lucide-react";

const WorkedDomains = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mt-[100px]">
      <div className="p-4 grid grid-cols-5 gap-4 hover:bg-elements rounded-lg transition-all duration-200">
        <div className="col-span-1">
          <SquareMousePointer className="w-[35px] h-auto text-cyan-300" />
        </div>
        <div className="col-span-4">
          <h4 className="text-lg font-medium mb-2">Websites</h4>
          <p className="text-gray-300">
            I develop websites for businesses or people&apos;s personal
            portfolio.
          </p>
        </div>
      </div>
      <div className="p-4 grid grid-cols-5 gap-4 hover:bg-elements rounded-lg transition-all duration-200">
        <div className="col-span-1">
          <ShoppingBag className="w-[35px] h-auto text-cyan-300" />
        </div>
        <div className="col-span-4">
          <h4 className="text-lg font-medium mb-2">Ecommerce</h4>
          <p className="text-gray-300">
            I build ecommerce stores and online marketplaces. Whether you need a
            Wordpress store or a custom platform, I have got you covered.
          </p>
        </div>
      </div>
      <div className="p-4 grid grid-cols-5 gap-4 hover:bg-elements rounded-lg transition-all duration-200">
        <div className="col-span-1">
          <LayoutDashboard className="w-[35px] h-auto text-cyan-300" />
        </div>
        <div className="col-span-4">
          <h4 className="text-lg font-medium mb-2">Dashboards</h4>
          <p className="text-gray-300">
            I have experience in making custom dashboards and data
            visualizations for businesses. This has helped the businesses to
            make better decisions.
          </p>
        </div>
      </div>
      <div className="p-4 grid grid-cols-5 gap-4 hover:bg-elements rounded-lg transition-all duration-200">
        <div className="col-span-1">
          <FileSliders className="w-[35px] h-auto text-cyan-300" />
        </div>
        <div className="col-span-4">
          <h4 className="text-lg font-medium mb-2">
            Inventory management systems
          </h4>
          <p className="text-gray-300">
            I have architectured and implemented a full-fledged inventory
            management system for a company. The system is multi-tenant and
            provides Role Based Access Control (RBAC).
          </p>
          <div className="flex justify-end mt-4"></div>
        </div>
      </div>
      <div className="col-span-4 flex justify-center mt-4">
        <Button large>Show My Work</Button>
      </div>
    </div>
  );
};

export default WorkedDomains;
