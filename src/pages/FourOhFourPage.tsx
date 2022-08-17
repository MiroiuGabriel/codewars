import { SadFaceIcon } from '../assets/icons';
import { Main } from '../components';

export const FourOhFourPage = () => {
	return (
		<Main>
			<div className="flex flex-col items-center w-full max-w-2xl mx-auto my-0 font-sans">
				<p className="flex flex-row items-center text-[80px] text-white">
					<SadFaceIcon className="w-28 h-28 text-white" />
					404
				</p>
				<h2 className="text-xl text-[#efefef] mb-4">
					Whoops! The page you were looking for doesn't seem to exist.
				</h2>
				<div className="text-center text-[#efefef] text-sm space-y-2">
					<p>
						You may have mistyped the address or the page may have
						moved. If you arrived at this page due to us taking you
						here then please let us know so that we can take a look
						into it.
					</p>
					<p>
						If this page should be here, please let us know how this
						happened by visiting our Github issues list. This will
						help us get things fixed faster.
					</p>
				</div>
			</div>
		</Main>
	);
};
